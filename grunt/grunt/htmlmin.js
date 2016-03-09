module.exports = function(grunt) {

  	grunt.config('htmlmin', {
      // minify all html files for production
      production: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.prod %>',
          src: '**/*.html',
          dest: '<%= config.prod %>'
        }]
      }
   });


};
