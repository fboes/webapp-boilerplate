module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    replace: {
      entities: {
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
      my_target: {
        files: {
          'js/main.min.js': ['js/*.js', '!js/main.min.js', 'js/vendor/**/*.js']
        }
      }
    },

    watch: {
      styles: {
        files: ['sass/**/*.scss'],
        tasks: ['compass']
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