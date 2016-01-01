module.exports = function (grunt) {
    var sourceFiles = [
        'contrib/spine-js/spine.js',
        'src/plugin/spine.js',
        'src/plugin/component/spine-component-system.js',
        'src/plugin/component/spine-component.js',
        'src/plugin/component/spine-component-data.js',
        'src/plugin/plugin.js',
    ];

    grunt.initConfig({
        uglify: {
            build: {
                files: {
                    'lib/playcanvas-spine.min.js': sourceFiles
                }
            },
            options: {
                banner: "/* Copyright 2015 PlayCanvas Ltd */\n"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ['uglify'])
};
