import 'server-only';

import fs from 'node:fs';
import path from 'node:path';

import { SITE_URL } from '@/lib/site';

export type RegistryItemType =
  | 'registry:item'
  | 'registry:ui'
  | 'registry:hook'
  | 'registry:example';

export type RegistryItem = {
  name: string;
  type: RegistryItemType;
  title: string;
  description: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: { path: string; type: string; target?: string }[];
  meta?: {
    docs?: string;
    parts?: string[];
    examples?: string[];
    component?: string;
  };
};

export type Token = { name: string; value: string; utility: string };

export const TOKEN_CATEGORIES = [
  'colors',
  'typography',
  'shadows',
  'radius',
] as const;

export type TokenCategory = (typeof TOKEN_CATEGORIES)[number];

const ROOT = process.cwd();
const ITEM_NAME = /^[a-z0-9-]+$/;
const USAGE_SEPARATOR = ' Usage: ';

const once = <T>(load: () => T) => {
  let value: T | undefined;
  return () => (value ??= load());
};

const readJson = (file: string) =>
  JSON.parse(fs.readFileSync(path.join(ROOT, file), 'utf8'));

const loadItems = once(() => {
  const items: RegistryItem[] = readJson('registry.json').items;
  return { items, byName: new Map(items.map((item) => [item.name, item])) };
});

export const getItems = () => loadItems().items;

export const getItem = (name: string) => loadItems().byName.get(name);

const ofType = (type: RegistryItemType) => () =>
  getItems().filter((item) => item.type === type);

export const getComponents = ofType('registry:ui');

export const getExamples = ofType('registry:example');

export const getExamplesOf = (component: string) =>
  (getItem(component)?.meta?.examples ?? [])
    .map(getItem)
    .filter((item): item is RegistryItem => item !== undefined);

export const plainDescription = (description: string) =>
  description.split(USAGE_SEPARATOR)[0];

export function getSource(name: string): string | undefined {
  if (!ITEM_NAME.test(name)) return undefined;
  const file = path.join('public/r', `${name}.json`);
  if (!fs.existsSync(path.join(ROOT, file))) return undefined;
  return readJson(file).files?.[0]?.content;
}

export const registryDependencyNames = (item: RegistryItem) =>
  (item.registryDependencies ?? []).map((url) => path.basename(url, '.json'));

export const addCommand = (names: string[]) =>
  `npx shadcn@latest add ${names.map((name) => `@alignui/${name}`).join(' ')}`;

export const addCommandByUrl = (names: string[]) =>
  `npx shadcn@latest add ${names.map((name) => `${SITE_URL}/r/${name}.json`).join(' ')}`;

export function usageImport(item: RegistryItem) {
  const parts = item.meta?.parts ?? [];
  if (!parts.includes('Root')) return undefined;
  const namespace = item.title.replace(/[^A-Za-z]/g, '');
  return {
    namespace,
    parts,
    code: `import * as ${namespace} from '@/components/ui/${item.name}';`,
  };
}

function relevance(item: RegistryItem, query: string, terms: string[]) {
  const name = item.name;
  const compactName = name.replace(/-/g, '');
  const compactQuery = query.replace(/[\s-]+/g, '');
  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();

  let score = 0;
  if (name === query || compactName === compactQuery) score += 100;
  if (compactName.includes(compactQuery)) score += 40;
  for (const term of terms) {
    if (name.includes(term)) score += 20;
    if (title.includes(term)) score += 10;
    if (description.includes(term)) score += 3;
  }
  return score > 0 && item.type === 'registry:ui' ? score + 5 : score;
}

export function searchItems(
  rawQuery: string,
  types: RegistryItemType[] = ['registry:ui', 'registry:example'],
) {
  const query = rawQuery.trim().toLowerCase();
  const terms = query.split(/[\s,]+/).filter(Boolean);

  return getItems()
    .filter((item) => types.includes(item.type))
    .map((item) => ({ item, score: relevance(item, query, terms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name))
    .map(({ item }) => item);
}

function editDistance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diagonal = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const above = row[j];
      row[j] = Math.min(
        above + 1,
        row[j - 1] + 1,
        diagonal + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
      diagonal = above;
    }
  }
  return row[b.length];
}

export function suggestNames(name: string, type: RegistryItemType, limit = 5) {
  const target = name.trim().toLowerCase();
  const maxDistance = Math.max(2, Math.floor(target.length / 3));
  const byTypo = getItems()
    .filter((item) => item.type === type)
    .map((item) => ({
      name: item.name,
      distance: editDistance(target, item.name),
    }))
    .filter(({ distance }) => distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance)
    .map((match) => match.name);
  const bySearch = searchItems(target, [type]).map((item) => item.name);
  return [...new Set([...byTypo, ...bySearch])].slice(0, limit);
}

export const getTokens = once(() => {
  const css = fs.readFileSync(
    path.join(ROOT, 'registry/default/styles/alignui.css'),
    'utf8',
  );
  const start = css.indexOf('@theme {');
  const theme = css.slice(start, css.indexOf('\n}', start));
  const declarations = new Map(
    [...theme.matchAll(/^\s*--([a-z0-9-]+):\s*([^;]+);/gm)].map((match) => [
      match[1],
      match[2].replace(/\s+/g, ' ').trim(),
    ]),
  );

  const tokens: Record<TokenCategory, Token[]> = {
    colors: [],
    typography: [],
    shadows: [],
    radius: [],
  };

  for (const [name, value] of declarations) {
    const token = { name: `--${name}`, value };
    if (name.startsWith('color-')) {
      const key = name.slice('color-'.length);
      tokens.colors.push({
        ...token,
        utility: `bg-${key} / text-${key} / ring-${key}`,
      });
    } else if (name.startsWith('text-') && !name.includes('--')) {
      const properties = [
        ['font-size', value],
        ...['line-height', 'letter-spacing', 'font-weight'].map((key) => [
          key,
          declarations.get(`${name}--${key}`),
        ]),
      ].filter(([, property]) => property !== undefined);
      tokens.typography.push({
        ...token,
        value: properties
          .map(([key, property]) => `${key}: ${property}`)
          .join('; '),
        utility: name,
      });
    } else if (name.startsWith('shadow-')) {
      tokens.shadows.push({ ...token, utility: name });
    } else if (name.startsWith('radius-')) {
      tokens.radius.push({
        ...token,
        utility: `rounded-${name.slice('radius-'.length)}`,
      });
    }
  }

  return tokens;
});
