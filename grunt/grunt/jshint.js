module.exports = function(grunt) {

  grunt.config('jshint', {
      all: ['Gruntfile.js', 'helpers/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
  });


};
