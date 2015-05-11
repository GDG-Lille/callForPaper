module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        subgrunt: {
            target0: {
                projects: {
                    'src/main/webapp/WEB-INF/static': 'build'
                }
            }
        },
        changelog: {
            options: {
                repository: 'https://github.com/SII-Nantes/callForPaper',
                version: "rev-" + grunt.option("rev")
            }
        }
    });

    grunt.loadNpmTasks('grunt-subgrunt');
    grunt.loadNpmTasks('grunt-conventional-changelog');
    grunt.registerTask('build', ['subgrunt']);
    grunt.registerTask('publish', ['changelog']);
}