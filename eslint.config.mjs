import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...compat.plugins('import', 'simple-import-sort'),
  ...compat.config({
    rules: {
      quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
      camelcase: [
        'warn',
        {
          properties: 'never', // Allows snake_case for object properties
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'import/no-cycle': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^react'], // react packages
            ['^next'], // next packages
            ['^'], // other third party packages
            ['^@\\w'], // scoped packages
            ['^\\u0000'], // Side effect
            ['^\\.'], // first party packages
            ['/public'],
          ],
        },
      ],
    },
  }),
];

export default eslintConfig;
