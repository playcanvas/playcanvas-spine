module.exports = function (grunt) {
    const srcCommon = [
        'src/component/spine-component-system.js',
        'src/component/spine-component.js',
        'src/component/spine-component-data.js',
        'contrib/semver/iife/semver.js',
        'src/spine-plugin.js'
    ];
    const src36 = [
        'contrib/spine-ts/build/3.6/spine-core.js',
        'src/spine.js'
    ].concat(srcCommon);
    const src38 = [
        'contrib/spine-ts/build/3.8/spine-core.js',
        'src/spine.js'
    ].concat(srcCommon);
    const src41 = [
        'contrib/spine-ts/build/4.1/spine-core.js',
        'src/spine.js'
    ].concat(srcCommon);

    const banner = '/* Copyright 2015-2021 PlayCanvas Ltd */\n';

    grunt.initConfig({
        concat: {
            spine36: {
                options: {
                    banner: banner,
                    separator: '\n'
                },
                src: src36,
                dest: 'build/playcanvas-spine.3.6.js'
            },
            spine38: {
                options: {
                    banner: banner,
                    separator: '\n'
                },
                src: src38,
                dest: 'build/playcanvas-spine.3.8.js'
            },
            spine41: {
                options: {
                    banner: banner,
                    separator: '\n'
                },
                src: src41,
                dest: 'build/playcanvas-spine.4.1.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'build/playcanvas-spine.3.6.min.js': src36,
                    'build/playcanvas-spine.3.8.min.js': src38,
                    'build/playcanvas-spine.4.1.min.js': src41
                }
            },
            options: {
                banner: banner
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ['concat', 'uglify']);
};
