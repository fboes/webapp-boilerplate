module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      build: {
        options: {
          //basePath: '',
          config: 'config.rb'
        }
      }
    },

    replace: {
      setup: {
        src: ['*.html','*.xml','manifests/*','js/main.js'],
        overwrite: true,
        replacements: [
          {from: 'Flashy application name',to: 'Your application name'},
          {from: 'Flashy description',     to: 'Your description'},
          {from: 'Flashy company',         to: 'Your company'},
          {from: 'http://flashy-domain',   to: 'http://your-domain'},
          {from: '/flashy-path/',          to: '/'},
          {from: '"en"',                   to: '"de"'}
        ]
      }
    },

    favicons: {
      options: {
        appleTouchPadding: 0
      },
      icons: {
        src: 'img/logo.png',
        dest: ''
      }
    },

    jslint: {
      build: {
        src: [
          'js/*.js',
          '!js/main.min.js'
        ],
        directives: {
          browser: true, white: true
        },
        options: {
          failOnError: false
        }
      }
    },

    uglify: {
      build: {
        files: {
          'js/main.min.js': ['js/*.js', '!js/main.min.js', 'js/vendor/**/*.js']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      grunt: {
        files: ['Gruntfile.js']
      },
      sass: {
        options: {
          livereload: false
        },
        files: ['sass/**/*.scss'],
        tasks: ['compass']
      },
      livereload: {
        files: ['css/*.css', '*.html']
      },
      scripts: {
        files: ['js/*.js', '!js/main.min.js', 'js/vendor/**/*.js'],
        tasks: ['jslint','uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-favicons');
  grunt.loadNpmTasks('grunt-jslint');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('default', ['compass','jslint','uglify']);

};
