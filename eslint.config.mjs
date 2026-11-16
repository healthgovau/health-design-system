import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends(
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:yml/recommended",
  ),
  {
    rules: {
      "consistent-return": "off",
      "import/no-mutable-exports": "warn",
      "max-nested-callbacks": ["warn", 3],
      "no-param-reassign": "off",
      "no-plusplus": ["warn", { allowForLoopAfterthoughts: true }],
      "no-prototype-builtins": "off",
      "no-underscore-dangle": "off",
      "object-shorthand": "off",
    },
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        Drupal: "readonly",
        DrupalTranslations: "readonly",
        drupalSettings: "readonly",
        jQuery: "readonly",
        once: "readonly",
        $: "readonly",
      },
    },
  },
];
