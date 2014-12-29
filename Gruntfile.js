/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dependency : [""],
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options : { jshintrc: true }
    },
    jstools : {
      merge : {
        src : ['<%= dependency %>'],
        dest : "dist/<%=pkg.name%>.js",
        level : "nocomment"
      },
      min : {
        src : ['<%= dependency %>'],
        dest : "dist/<%=pkg.name%>_min.js",
        level : "min"
      }
    }
    // watch: {
    //   files: ['<%= jshint.files %>'],
    //   tasks: ['jshint']
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jstools');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jstools']);
};
