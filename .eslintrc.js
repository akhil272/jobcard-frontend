module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
        'import',
        'json',
        'jest',
        'react',
        'react-hooks',
        'simple-import-sort',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {},
        },
    },
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'eslint:recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'plugin:prettier/recommended', // Make sure this is always the last element in the array.
    ],
    rules: {
        'no-var': 'error',
        semi: 'error',
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        'no-multiple-empty-lines': 'error',
        'prefer-const': 'error',
        'no-use-before-define': 'error',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
            {
                usePrettierrc: true,
            },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/no-render-return-value': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton'],
            },
        ],
        curly: 'error',
        eqeqeq: 'error',
        'func-style': 'error',
        'import/default': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-anonymous-default-export': [
            'error',
            {
                allowArray: true,
                allowArrowFunction: true,
                allowAnonymousClass: true,
                allowAnonymousFunction: true,
                allowCallExpression: true, // The true value here is for backward compatibility
                allowLiteral: true,
                allowObject: true,
            },
        ],
        'import/no-duplicates': 'error',
        'import/no-unresolved': ['error', { ignore: ['.svg$'] }],
        'linebreak-style': 'off',
        'no-alert': 'error',
        'no-eval': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-undef': 'off',
        'no-underscore-dangle': 'error',
        'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
        'no-unused-vars': 'off',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-template': 'error',
        'react/jsx-fragments': 'error',
        'react/no-danger': 'error',
        'spaced-comment': ['error', 'always', { block: { balanced: true } }],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-non-null-assertion': 'warn',
    },
};
