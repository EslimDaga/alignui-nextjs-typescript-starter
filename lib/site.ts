export const SITE_URL = (
  process.env.REGISTRY_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '');

export const MCP_URL = `${SITE_URL}/mcp`;

export const GITHUB_URL =
  'https://github.com/EslimDaga/alignui-nextjs-typescript-starter';

export const ALIGNUI_DOCS_URL =
  'https://www.alignui.com/docs/v1.2/introduction';
