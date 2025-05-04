import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      react: eslintPluginReact,
      reactHooks: eslintPluginReactHooks,
      jsxA11y: eslintPluginJsxA11y,
      prettier: eslintPluginPrettier,
    },
    files: ['*.js', '*.ts', '*.tsx', '*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-unused-vars': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-unknown-property': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'react/jsx-no-constructed-context-values': 'warn',
      'react/no-adjacent-inline-elements': 'warn',
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: [
      'node_modules',
      'build',
      'dist',
      'coverage',
      '.next',
      '.turbo',
      '.vercel',
      '.github',
    ],
  },
  eslintConfigPrettier,
];

export default eslintConfig;
