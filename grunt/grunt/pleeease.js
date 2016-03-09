// Post-process your css with vendor prefix

module.exports = function(grunt) {

    grunt.config('pleeease', {

      css: {
        options: {
          minifier: false, // set true for production
          filters: { "oldIE": true },
        },
        files: {
          '<%= config.assets %>/css/': '<%= config.css %>/*.css',
        }
      },
      production: {
        options: {
          minifier: true, // set true for production
          filters: { "oldIE": true },
        },
        files: {
          '<%= config.assets %>/css/theme.min': '<%= config.css %>/theme.css',
        }
      },

   });


};

