module.exports = function(grunt) {

    grunt.initConfig({
        serve: {
            options: {
                port: 1993,
                serve: {
                    path: '/home/employee/JS/JSZoo'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-serve');

};