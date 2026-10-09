import playcanvasConfig from '@playcanvas/eslint-config';
import globals from 'globals';

export default [
    ...playcanvasConfig,
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser
            }
        },
        settings: {
            // aliases which rollup resolves to the spine-core runtime and the renderer of each build
            'import/core-modules': [
                'spine-core-import',
                'spine-class-import'
            ]
        },
        rules: {
            'import/order': 'off'
        }
    }
];
