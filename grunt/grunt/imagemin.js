module.exports = function(grunt) {

  grunt.config('imagemin', {
    options: {
      cache: false
    },

    dist: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['**/*.{png,jpg,gif}'],
        dest: '<%= config.live %>'
      }]
    }
  });


};
