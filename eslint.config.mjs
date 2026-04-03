import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "off",

      eqeqeq: "error",
      curly: "error",

      "no-var": "error",
      "prefer-const": "error",

      "arrow-body-style": ["error", "as-needed"],

      "no-multiple-empty-lines": ["error", { max: 1 }],
      "no-trailing-spaces": "error",

      "consistent-return": "error",

      "no-implicit-globals": "error",

      "no-restricted-globals": ["error", "event"],
    },
    ignores: [".github/", ".vscode/", "node_modules/"]
  },
]);
