module.exports = function(grunt) {

  grunt.config('concurrent', {
	  src: ['copy:foundation','copy:src'],
	  copy: ['copy:foundation','copy:bootstrap', 'copy:bootstrapcss','copy:src'],
	  prod: ['copy:foundation','copy:bootstrap', 'copy:bootstrapcss','copy:prod'],
	  assets: ['copy:jquery', 'copy:holder', 'copy:highlight', 'copy:modernizr']
  });


};
