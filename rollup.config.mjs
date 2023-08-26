// rollup.config.mjs

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import alias from '@rollup/plugin-alias';

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
        name: 'playcanvas-spine.4.1',
        lib: 'src/wrapper.js'
    }
];

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

    const entries = { './wrapper.js': lib };
    const buildPlugins = [alias({ entries }), commonjs(), nodeResolve()];

    return {
        input: 'src/plugin.js',
        context: 'this', // remove when using ESM libs
        output: [
            {
                file: `${outputDir + name}.js`,
                format: 'cjs',
                banner: banner,
                plugins: outputPlugins.release
            },
            {
                file: `${outputDir + name}.min.js`,
                format: 'cjs',
                banner: banner,
                plugins: outputPlugins.min
            }
        ],
        plugins: buildPlugins
    };
}
