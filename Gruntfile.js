module.exports = function(grunt) {

    grunt.initConfig({

        less: {
            options: {
                paths: ["out/css/"],
                compress: true
            },
            src: {
                files: {
                    "out/css/styles.css": "src/files/less/styles.less"
                }
            }
        }

    });

    grunt.registerTask('default', ['less']);

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
}