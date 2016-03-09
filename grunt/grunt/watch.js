module.exports = function(grunt) {

  grunt.config('watch', {
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files:[
        '<%= config.live %>/**/*.html',
        '<%= config.css %>/{,*/}*.css',
        '<%= config.assets %>/js/{,*/}*.js',
        '<%= config.assets %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',

      ],
    },
     // Watch .hbs files then recompile html
    scss:{
      files:['<%= config.sass %>/**/*.scss'],
      tasks:[
      'sass', 
      'pleeease',
      ]
    },
    // Watch .hbs files then recompile html
    hbs:{
      files:[      
      '<%= config.src %>/blog/**/*.hbs',
      ],
      tasks:[
      // 'build',
      'assemble',
      ]
    },
    // Watch .html files for changes, clean old screenshots, create new ones
    screenshots:{
      files:[      
      '<%= config.live %>/**/*.html',
      ],
      tasks:[
      'clean:screenshots',
      'autoshot',
      // 'clean:remotescreens', // 
      ]
    },

  });


};
