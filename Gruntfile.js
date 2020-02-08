module.exports = function (grunt) {
    const sourceFiles = [
        'contrib/spine-ts/build/spine-core.js',
        'src/plugin/spine.js',
        'src/plugin/component/spine-component-system.js',
        'src/plugin/component/spine-component.js',
        'src/plugin/component/spine-component-data.js',
        'src/plugin/plugin.js',
    ];
    const banner = '/* Copyright 2015-2020 PlayCanvas Ltd */\n';

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    banner: banner,
                    separator: '\n'
                },
                src: sourceFiles,
                dest: 'lib/playcanvas-spine.js'
            }
        },
        uglify: {
            build: {
                files: {
                    'lib/playcanvas-spine.min.js': sourceFiles
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
