module.exports = function(grunt) {
  // Initialize config.
  grunt.initConfig({
    pkg   : grunt.file.readJSON('package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,
    site  : grunt.file.readYAML('_config.yml'),
    pages : grunt.file.readJSON('src/blog/data/pages.json'),

    config: {
      live: '<%= config.dist %>',
      src: 'src',
      dist: '<%= site.dest %>',
      prod: 'www/',
      sass: 'src/scss/',
      css: '<%= config.src %>/css',      
      assets:'<%= config.dist %>/assets',
      port: '9000',
    },



  });

  // require('time-grunt')(grunt);
  grunt.loadNpmTasks('assemble');
  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('grunt');

  grunt.registerTask('css', [ 
    'sass', 
    'pleeease', 
    // 'watch'
    ]);

  grunt.registerTask('pro', [
      'clean:prod',
      'copy:build', 
      'htmlmin',
      'sitemap',
      // 'server'
     ]);

  grunt.registerTask('build', [
    'clean', 
    'css',
    'copy:src',
    'assemble',
    'autoshot',
    ]);

  grunt.registerTask('screenshot', ['server','autoshot']);


  grunt.registerTask('server', ['connect','watch']);
  
  grunt.registerTask('default', [
    'build', 
    'server',
    ]);


};