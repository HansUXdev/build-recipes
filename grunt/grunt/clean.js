module.exports = function(grunt) {

  grunt.config('clean', {
	  screenshots: [
		  '<%= config.live %>/assets/images/screenshots/*.jpg',
	  ],
	  dist: [
		  '<%= config.dist%>/**/*',
		  // '<%= config.dist%>/**/*.html',
	  ],
	  prod: [
		  'www/*',
	  ],
	  // remove remote
	  // remotescreens: [
		 //  '<%= config.live %>/assets/images/screenshots/*remote-{320x480, 384x640, 640x384, 602x963, 963x602, 960x600, 800x1280, 1280x800, 768x1024, }320x480-live.jpg',
	  // ],
  });


};
