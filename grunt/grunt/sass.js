module.exports = function(grunt) {

    grunt.config('sass', {
      development: {
        options: {
          sourceMap: true,
        },
        files: {
            '<%= config.css %>/theme.css': '<%= config.sass %>/theme.scss',
            '<%= config.dist %>/assets/css/colors.css': '<%= config.sass %>/theme/colors.scss',
        }
      },
      
      // production: {
      //   options: {
      //     sourceMap: true,
      //     outputStyle: 'compressed' // use in production
      //   },
      //   files: {
      //       '<%= config.css %>/theme.min.css': '<%= config.sass %>/theme.scss',
      //       '<%= config.dist %>/assets/css/theme.css': '<%= config.sass %>/theme.scss',
      //   }
      // },

   });


};
