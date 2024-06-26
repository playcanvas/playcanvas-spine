// rollup.config.mjs

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';

/** @typedef {import('rollup').RollupOptions} RollupOptions */
/** @typedef {import('rollup').Plugin} Plugin */
/** @typedef {import('rollup').OutputOptions} OutputOptions */
/** @typedef {import('@rollup/plugin-babel').RollupBabelInputPluginOptions} RollupBabelInputPluginOptions */

const banner = `/* Copyright 2015-${new Date().getFullYear()} PlayCanvas Ltd */\n`;

/**
 * @example
 * {
 *     name: 'playcanvas-spine.4.0',
 *     lib: 'spine40' // replacement for import alias
 * }
 */
const builds = [
    {
        name: 'playcanvas-spine.3.6',
        lib: 'contrib/spine-ts/build/3.6/spine-core.js'
    },
    {
        name: 'playcanvas-spine.3.8',
        lib: 'contrib/spine-ts/build/3.8/spine-core.js'
    },
    {
        name: 'playcanvas-spine.4.0',
        lib: 'src/wrapper40.js'
    },
    {
        name: 'playcanvas-spine.4.1',
        lib: 'src/wrapper41.js'
    },
    {
        name: 'playcanvas-spine.4.2',
        lib: 'src/wrapper42.js'
    }
];

/**
 * The ES5 options for babel(...) plugin.
 *
 * @param {'debug'|'release'|'profiler'|'min'} buildType - Use 'debug' for comments
 * @returns {RollupBabelInputPluginOptions} The babel options.
 */
const es5Options = buildType => ({
    babelHelpers: 'bundled',
    babelrc: false,
    comments: buildType === 'debug',
    compact: false,
    minified: false,
    presets: [
        [
            '@babel/preset-env', {
                modules: false,
                targets: {
                    ie: '11'
                }
            }
        ]
    ]
});

/**
 * Return all the build targets.
 *
 * @returns {RollupOptions | RollupOptions[]} Build targets.
 */
export default [
    ...builds.map(buildDefinition => buildTarget(buildDefinition))
];

/**
 * Return a target that rollup is supposed to build.
 *
 * @param {{ name, lib }} buildDefinition - The build definition.
 * @returns {RollupOptions} One rollup target.
 */
function buildTarget({ name, lib }) {

    const outputDir = './build/';

    const outputPlugins = {
        release: [],
        min: [terser()]
    };

    const outputGlobals = {
        playcanvas: 'pc'
    };

    // spine-core-import is an alias
    const entries = { 'spine-core-import': lib };

    const buildPlugins = [alias({ entries }), commonjs(), nodeResolve(), babel(es5Options('release'))];

    return {
        external: ['playcanvas'],
        input: 'src/SpinePlugin.js',
        context: 'this', // remove when using ESM libs
        output: [
            {
                file: `${outputDir + name}.js`,
                format: 'iife',
                name: 'spine',
                banner: banner,
                indent: '\t',
                preserveModules: false,
                globals: outputGlobals,
                generatedCode: 'es5', // refers to rollup wrappers
                plugins: outputPlugins.release
            },
            {
                file: `${outputDir + name}.min.js`,
                format: 'iife',
                name: 'spine',
                banner: banner,
                preserveModules: false,
                globals: outputGlobals,
                generatedCode: 'es5', // refers to rollup wrappers
                plugins: outputPlugins.min
            }
        ],
        plugins: buildPlugins
    };
}
