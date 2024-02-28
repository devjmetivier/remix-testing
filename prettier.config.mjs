import { fileURLToPath } from 'url';

/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef {import("prettier-plugin-tailwindcss").PluginOptions} TailwindConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig | TailwindConfig } */
const config = {
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '^(react/(.*)$)|^(react$)|^(react-native(.*)$)|^(react-dom(.*)$)',
    '^(next/(.*)$)|^(next$)',
    '^(expo(.*)$)|^(expo$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@acme/(.*)$',
    '^@tooling/(.*)$',
    '',
    '^~/',
    '^[../]',
    '^[./]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  jsxSingleQuote: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tailwindConfig: fileURLToPath(new URL('./tailwind.config.ts', import.meta.url)),
  trailingComma: 'all',
};

export default config;
