module.exports = function(grunt) {

  grunt.config('copy', {
      foundation:{
        expand: true,
        cwd: 'vendor/foundation/',
        src: [
          'js/**/*',
          // 'js/vendor/**/*',
          'css/**/*',
          'scss/foundation/**/*'],
        dest: 'src/'
      },

      

      // DEVELOPMENT Copy files from src to www
      src:{
        expand: true,
        cwd: 'src/',
        src: [
          'js/**/*',
          'css/**/*',
          'fonts/**/*',
          // 'scss/**/*'
          ],
        dest: '<%= site.dest %>/assets'
      },

      // PRODUCTION | Copy files from 'dist' to www
      build:{
        expand: true,
        cwd: '<%= config.dist %>',
        src: [
          'blog/**/*',
          'assets/**/*',
          '*.html'
          ],
        dest: '<%= config.prod %>'
      },
  });


};
