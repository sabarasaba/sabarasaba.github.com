module.exports = function(grunt) {
  'use strict';

  // ==========================================================================
  // Project configuration
  // ==========================================================================
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // clean build directory
    clean: ['deploy'],

    // tasks to be executed and files
    // to be watched for changes
    watch: {
      files: ['./js/app/**/*.hbs', './js/app/**/*.js', './js/test/SpecRunner.js'],
      tasks: ['clean', 'jshint:all', 'handlebars', 'requirejs', 'concat', 'cssmin', 'copy']
    },

    // require js
    requirejs: {
      compile: {
        options: {
          dir: 'deploy',
          baseUrl: './js',
          //configuration file
          mainConfigFile: 'js/main.js',
          // optimize javascript files with uglifyjs
          optimize: 'uglify',
          // define dependencies
          modules: [
            {
              name: 'main'
            },
            {
              name: 'app/application',
              exclude: ['main']
            }
          ]
        }
      }
    },

    //Precompile hbs files into app/template.js
    //generates the template registry
    handlebars: {
      compile: {
        options: {
          namespace: 'JST',
          amd: true,
          processName: function(filename) {
            var pieces = filename.split('/');
            return pieces[pieces.length - 1];
          }
        },
        files: {
          'js/app/templates.js': 'js/**/*.hbs'
        }
      }
    },

    // js linting options
    jshint: {
      all: ['Gruntfile.js', 'js/main.js', 'js/app/**/*.js', '!js/app/templates.js', '!js/app/utils/debug.js'],
      jshintrc: '.jshintrc'
    },

    concat: {
      css: {
        src: ['css/*.css', 'js/app/**/*.css'],
        dest: 'deploy/css/<%= pkg.name %>-<%= pkg.version %>.concat.css'
      }
    },

    cssmin: {
      my_target: {
        src: 'deploy/css/<%= pkg.name %>-<%= pkg.version %>.concat.css',
        dest: 'deploy/css/<%= pkg.name %>.min-<%= pkg.version %>.css'
      }
    },

    karma: {
      watch: {
        configFile: 'karma.conf.js'
      },
      ci: {
        configFile: 'karma.conf.js',
        autoWatch: false,
        singleRun: true,
        browsers: ['PhantomJS']
      }
    }

  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-karma');

  // default build task
  grunt.registerTask('default', 'build');

  // build task
  grunt.registerTask('build', ['clean', 'jshint:all', 'handlebars', 'requirejs', 'concat', 'cssmin']);

  // test task
  grunt.registerTask('test', ['karma:watch']);

  // watch task
  grunt.registerTask('w', ['watch']);
};
