module.exports = {
    extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
    // Add custom rules here
    rules: {
        indent: ['error', 4],
        'import/prefer-default-export': 0,
    },
    overrides: [
        {
            files: ['style.ts'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@src', './src'],
                    ['@components', './src/components'],
                    ['@layouts', './src/layouts'],
                    ['@styles', './src/styles'],
                    ['@assets', './src/assets'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.tsx'],
            },
            typescript: {},
        },
    },
};
