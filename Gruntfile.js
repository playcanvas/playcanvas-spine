module.exports = function (grunt) {
    const srcCommon = [
        'src/spine.js',
        'src/component/spine-component-system.js',
        'src/component/spine-component.js',
        'src/component/spine-component-data.js',
        'src/spine-plugin.js'
    ];
    const src36 = [
        'contrib/spine-ts/build/3.6/spine-core.js',
    ].concat(srcCommon);
    const src38 = [
        'contrib/spine-ts/build/3.8/spine-core.js',
    ].concat(srcCommon);

    const banner = '/* Copyright 2015-2020 PlayCanvas Ltd */\n';

    grunt.initConfig({
        concat: {
            spine36: {
                options: {
                    banner: banner,
                    separator: '\n'
                },
                src: src36,
                dest: 'lib/playcanvas-spine.3.6.js'
            },
            spine38: {
                options: {
                    banner: banner,
                    separator: '\n'
                },
                src: src38,
                dest: 'lib/playcanvas-spine.3.8.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'lib/playcanvas-spine.3.6.min.js': src36,
                    'lib/playcanvas-spine.3.8.min.js': src38
                }
            },
            options: {
                banner: banner
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ['concat', 'uglify'])
};
