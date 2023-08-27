module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        jest: true,
    },
    rules: {
        "no-multiple-empty-lines": "warn",
        "no-var": "error",
        "prefer-const": "error",
    },
};
