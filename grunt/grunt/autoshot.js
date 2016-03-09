module.exports = function(grunt) {

  	grunt.config('autoshot', {

      // default_options: {
      //     options: {
      //         path: '<%= config.live %>/assets/images/screenshots/',
      //         local: {
      //             path: '<%= config.live %>',
      //             port: '<%= config.port %>',
      //             files: [
      //               {
      //                   src: 'index.html',
      //                   dest: 'index.jpg',
      //               },
      //               {
      //                   src: 'about.html',
      //                   dest: 'about.jpg',
      //               },
      //               {
      //                   src: 'offcanvas.html',
      //                   dest: 'offcanvas.jpg',
      //               },
      //               {
      //                   src: 'sitemap.html',
      //                   dest: 'sitemap.jpg',
      //               },
      //               {
      //                   src: 'resume.html',
      //                   dest: 'resume.jpg',
      //               },
      //               {
      //                   src: 'sidebar.html',
      //                   dest: 'sidebar.jpg',
      //               },
      //               // take pictures of blog
      //                 {
      //                     src: 'blog/blog.html',
      //                     dest: 'blog.jpg',
      //                 },

      //             ]
      //         },
      //         remote: {
      //           files: [
      //             { 
      //               src: "",
      //               // Remove dest to prevent remote pictures from being created
      //               // dest: 'remote.jpg', 
      //             },
      //           ]
      //         },
      //         viewport: [
      //             '1024x768',
      //             '600x960', 
      //             '480x320', 
      //             '320x480', 
      //             // '384x640', '640x384', '602x963', '963x602', 960x600', '800x1280', '1280x800', '768x1024', 
      //         ]
      //     },
      // },


      og_images: {
          options: {
              path: '<%= config.live %>/assets/images/screenshots/',
              local: {
                  path: '<%= config.live %>',
                  port: '<%= config.port %>',
                  files: [
                    // take pictures of blog
                      {
                          src: 'blog/blog.html',
                          dest: 'blog.jpg',
                      },
                        {
                            src: 'blog/blog-generator.html',
                            dest: 'blog-generator.jpg',
                        },

                  ]
              },
              remote: {
                files: [
                  { 
                    src: "",
                    // Remove dest to prevent remote pictures from being created
                    // dest: 'remote.jpg', 
                  },
                ]
              },
              viewport: [
                  '1200x627',
                  '400x209',
              ]
          },
      },
   });


};
