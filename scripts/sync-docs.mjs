import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const DOCS_URL = 'https://www.alignui.com';
const DOCS_VERSION = 'v1.2';
const ROOT = path.resolve(import.meta.dirname, '..');
const OUT_DIR = path.join(ROOT, 'registry/default');
const MIRRORED_DIRS = ['ui', 'hooks', 'utils', 'example'];
const PAGE_BATCH_SIZE = 6;
const ASSET_BATCH_SIZE = 8;
const FETCH_ATTEMPTS = 3;

const DOCS_FILE_NAMES = {
  'utils/cn-new.ts': 'utils/cn.ts',
  'utils/tv-new.ts': 'utils/tv.ts',
};

const DOCS_APP_MOCKS = {
  '@repo/registry/next-link-mock': 'next/link',
  '@repo/registry/next-image-mock': 'next/image',
};

const REPO_ONLY_COMPONENTS = ['components/ui/social-button.tsx'];

const HTML_ENTITIES = {
  '&#x27;': "'",
  '&quot;': '"',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
};

const registryPath = (docsPath) => DOCS_FILE_NAMES[docsPath] ?? docsPath;

const decodeHtml = (text) =>
  text.replace(
    /&#x27;|&quot;|&amp;|&lt;|&gt;/g,
    (entity) => HTML_ENTITIES[entity],
  );

async function fetchOk(url, attempt = 1) {
  const response = await fetch(url);
  if (response.ok) return response;
  if (attempt < FETCH_ATTEMPTS) return fetchOk(url, attempt + 1);
  throw new Error(`${response.status} ${url}`);
}

async function inBatches(values, size, task) {
  const results = [];
  for (let start = 0; start < values.length; start += size) {
    results.push(
      ...(await Promise.all(values.slice(start, start + size).map(task))),
    );
  }
  return results;
}

function writeFile(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

function flightPayload(html) {
  return [
    ...html.matchAll(
      /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)<\/script>/g,
    ),
  ]
    .map((match) => JSON.parse(match[1]))
    .join('');
}

function flightTextRows(payload) {
  const bytes = Buffer.from(payload, 'utf8');
  const latin1 = bytes.toString('latin1');
  const adjacentRow = /([0-9a-f]+):T([0-9a-f]+),/y;
  const nextRow = /(?:^|\n|\])([0-9a-f]+):T([0-9a-f]+),/g;
  const rows = {};

  for (let position = 0; ; ) {
    adjacentRow.lastIndex = position;
    nextRow.lastIndex = position;
    const row = adjacentRow.exec(latin1) ?? nextRow.exec(latin1);
    if (!row) return rows;
    const start = row.index + row[0].length;
    position = start + parseInt(row[2], 16);
    rows[row[1]] = bytes.subarray(start, position).toString('utf8');
  }
}

function extractSources(payload) {
  const rows = flightTextRows(payload);
  const rawStringKey = '"__rawString__":';
  const sources = {};

  for (const match of payload.matchAll(
    /"__src__":"node_modules\/@repo\/registry\/default\/([^"]+)"/g,
  )) {
    const keyIndex = payload.indexOf(rawStringKey, match.index);
    if (keyIndex < 0 || keyIndex - match.index > 2000) continue;

    const literal = /"(?:[^"\\]|\\.)*"/y;
    literal.lastIndex = keyIndex + rawStringKey.length;
    const value = JSON.parse(literal.exec(payload)[0]);
    const code = value.startsWith('$') ? rows[value.slice(1)] : value;
    if (code !== undefined) sources[registryPath(match[1])] = code;
  }

  return sources;
}

function pageMeta(slug, html, payload) {
  const mainFile = html.match(
    /<figure __src__="node_modules\/@repo\/registry\/default\/([^"]+)"/,
  )?.[1];
  const install = [...payload.matchAll(/npm install ([^"\\\n<]+)/g)].flatMap(
    (match) => match[1].trim().split(/\s+/),
  );

  return {
    slug,
    title: decodeHtml(html.match(/<title>([^<|]+)/)?.[1].trim() ?? slug),
    description: decodeHtml(
      html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '',
    ),
    file: mainFile ? registryPath(mainFile) : null,
    install: [...new Set(install)],
  };
}

async function docsSlugs() {
  const index = await (
    await fetchOk(`${DOCS_URL}/docs/${DOCS_VERSION}/introduction`)
  ).text();
  const links = index.matchAll(
    new RegExp(`href="/docs/${DOCS_VERSION}/((?:ui|utils)/[a-z0-9-]+)"`, 'g'),
  );
  return [...new Set([...links].map((match) => match[1]))].sort();
}

function repoOnlySource(file) {
  const mirrored = path.join(OUT_DIR, 'ui', path.basename(file));
  if (fs.existsSync(mirrored)) return fs.readFileSync(mirrored, 'utf8');
  return execFileSync('git', ['show', `upstream/master:${file}`], {
    cwd: ROOT,
    encoding: 'utf8',
  });
}

const replaceDocsAppMocks = (code) =>
  Object.entries(DOCS_APP_MOCKS).reduce(
    (current, [mock, real]) => current.replaceAll(`'${mock}'`, `'${real}'`),
    code,
  );

async function mirrorDemoAssets(sources) {
  const assets = [
    ...new Set(
      Object.values(sources).flatMap((code) =>
        [...code.matchAll(/["'`](\/(?:images|flags)\/[^"'`]+)["'`]/g)].map(
          (match) => match[1],
        ),
      ),
    ),
  ].sort();

  await inBatches(assets, ASSET_BATCH_SIZE, async (asset) => {
    try {
      const response = await fetchOk(`${DOCS_URL}${asset}`);
      writeFile(
        path.join(ROOT, 'public', asset),
        Buffer.from(await response.arrayBuffer()),
      );
    } catch (error) {
      console.warn(`warn: ${error.message}`);
    }
  });

  return assets.length;
}

const slugs = await docsSlugs();
const sources = {};

const pages = await inBatches(slugs, PAGE_BATCH_SIZE, async (slug) => {
  const html = await (
    await fetchOk(`${DOCS_URL}/docs/${DOCS_VERSION}/${slug}`)
  ).text();
  const payload = flightPayload(html);
  for (const [file, code] of Object.entries(extractSources(payload))) {
    if (sources[file] !== undefined && sources[file] !== code) {
      console.warn(`warn: ${file} differs between pages`);
    }
    sources[file] = code;
  }
  return pageMeta(slug, html, payload);
});

for (const file of REPO_ONLY_COMPONENTS) {
  sources[`ui/${path.basename(file)}`] ??= repoOnlySource(file);
}

for (const dir of MIRRORED_DIRS) {
  fs.rmSync(path.join(OUT_DIR, dir), { recursive: true, force: true });
}
for (const [file, code] of Object.entries(sources)) {
  writeFile(path.join(OUT_DIR, file), replaceDocsAppMocks(code));
}

const assetCount = await mirrorDemoAssets(sources);

writeFile(
  path.join(OUT_DIR, 'docs.json'),
  `${JSON.stringify(
    {
      source: `${DOCS_URL}/docs/${DOCS_VERSION}`,
      repoOnly: REPO_ONLY_COMPONENTS,
      pages: pages.sort((a, b) => a.slug.localeCompare(b.slug)),
    },
    null,
    2,
  )}\n`,
);

const count = (dir) =>
  Object.keys(sources).filter((file) => file.startsWith(`${dir}/`)).length;
console.log(`public: ${assetCount} demo assets`);
console.log(
  `registry/default: ${count('ui')} ui, ${count('hooks')} hooks, ${count('utils')} utils, ${count('example')} examples`,
);
