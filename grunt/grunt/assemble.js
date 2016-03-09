module.exports = function(grunt) {

  	grunt.config('assemble', {
      options:{
          layoutdir: 'src/blog/layouts',
          // Extensions
          helpers: ['helper-prettify', 'helper-compose', 'src/blog/helpers/*.js'],
          // plugins: ['permalinks'],
          permalinks: {preset: 'pretty'},
          data: ['src/blog/data/**/*.{json,yml}'],

          // Site variables
          site: '<%= site %>',
          assets: '<%= site.dest %>/assets',
          root: '<%= site.dest %>',
      },
      // Build your website
      blog: {
        options:{
          flatten: true,
          partials: ['src/blog/partials/*.hbs',],
        },
        files:{
          '<%= site.dest %>/': ['src/blog/*.hbs'],
        }
      },

      // Generate Blog Posts from json list and partials
      posts:{
        options:{
          flatten: true,
          pages: '<%= pages.posts %>', // Create blog posts from json
          
          // Use these partials in pages.json
          partials: ['src/blog/posts/*.hbs',], // this will provide the CONTENT
        },

        files:{
          '<%= site.dest %>/blog/': ['src/blog/blog.hbs'],
        }
      }



   });


};
