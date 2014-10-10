module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      web: ''
    },

    compass: {
      build: {
        options: {
          basePath: '<%= dirs.web %>',
          config: '<%= dirs.web %>config.rb'
        }
      }
    },

    replace: {
      setup: {
        src: ['<%= dirs.web %>*.html','<%= dirs.web %>*.xml','<%= dirs.web %>manifests/*','<%= dirs.web %>js/main.js'],
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
        src: '<%= dirs.web %>img/logo.png',
        dest: ''
      }
    },

    jslint: {
      build: {
        src: [
          '<%= dirs.web %>js/*.js',
          '!<%= dirs.web %>js/main.min.js'
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
          '<%= dirs.web %>js/main.min.js': ['<%= dirs.web %>js/*.js', '!<%= dirs.web %>js/main.min.js', '<%= dirs.web %>js/vendor/**/*.js']
        }
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= dirs.web %>sass/**/*.scss'],
        tasks: ['compass']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['<%= dirs.web %>css/*.css', '<%= dirs.web %>*.html', '<%= dirs.web %>*.php']
      },
      scripts: {
        options: {
          livereload: true
        },
        files: ['<%= dirs.web %>js/*.js', '!<%= dirs.web %>js/main.min.js', '<%= dirs.web %>js/vendor/**/*.js'],
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
