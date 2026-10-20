import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.vercel/**',
    'registry/**',
    '.registry/**',
    'components/ui/**',
    'hooks/**',
    'lib/cn.ts',
    'lib/tv.ts',
    'lib/polymorphic.ts',
    'lib/recursive-clone-children.tsx',
    'components/site/examples.generated.tsx',
  ]),
]);

export default eslintConfig;
