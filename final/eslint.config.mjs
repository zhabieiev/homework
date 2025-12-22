import stylistic from '@stylistic/eslint-plugin';
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default tsEslint.config(
    {
        ignores: ['src/api/generatedModels/**', 'node_modules/**', 'build/**']
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: process.cwd(),
            },
        },
        plugins: {
            '@stylistic': stylistic,
            unicorn: eslintPluginUnicorn
        },
        extends: [
            eslint.configs.recommended, 
            ...tsEslint.configs.recommended, 
            ...tsEslint.configs.stylistic
        ],
        rules: {
            '@typescript-eslint/require-await': 'error',
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
            '@typescript-eslint/no-shadow': 'error',
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                { allowExpressions: true }
            ],
            
            '@stylistic/indent': ['error', 4],
            '@stylistic/max-len': [
                'warn',
                {
                    code: 140,
                    ignoreUrls: true,
                    ignoreStrings: true,
                    ignoreTemplateLiterals: true
                }
            ],
            '@stylistic/quotes': ['warn', 'single'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/comma-dangle': ['error', 'never'],
            '@stylistic/no-multiple-empty-lines': ['error', { max: 2 }],
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/arrow-spacing': 'error',
            '@stylistic/keyword-spacing': ['error', { before: true, after: true }],
            '@stylistic/eol-last': ['error', 'always'],
            
            'unicorn/filename-case': [
                'error',
                {
                    case: 'kebabCase',
                    ignore: [/\..*\.ts$/] 
                }
            ]
        }
    }
);