module.exports = function(grunt) {
  'use strict';

  var PATH_ASSETS_CSS = 'css/';
  var PATH_DEPLOY_ASSETS = 'public/';

  // ==========================================================================
  // Project configuration
  // ==========================================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: [PATH_DEPLOY_ASSETS],

    csslint: {
      lax: {
        rules: {
          'box-model': false,
          'outline-none': false
        },
        src: [
          PATH_ASSETS_CSS + '*.css',
          '!' + PATH_ASSETS_CSS + 'animate.css'
        ]
      }
    },

    concat: {
      css: {
        src: [PATH_ASSETS_CSS + '*.css'],
        dest: PATH_DEPLOY_ASSETS +
          'css/<%= pkg.name %>.concat.css'
      }
    },

    cssmin: {
      my_target: {
        src: PATH_DEPLOY_ASSETS +
          'css/<%= pkg.name %>.concat.css',
        dest: PATH_DEPLOY_ASSETS +
          'css/<%= pkg.name %>.min.css'
      }
    },

    watch: {
      assets: {
        files: [
          PATH_ASSETS_CSS + '*.css',
          'index.html'
        ],
        tasks: ['csslint:lax', 'concat', 'cssmin'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-css');

  grunt.registerTask('default', 'build:dev');

  grunt.registerTask('build:dev', ['clean', 'csslint:lax', 'concat', 'cssmin', 'watch:assets']);
};
