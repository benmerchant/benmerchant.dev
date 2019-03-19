/*
 * Title: Gruntfile.js
 *
 * Description: Task runner for our app
 *
 * Author: Ben Merchant
*/


// wrapper function
module.exports = (grunt) => {
  // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
  require('load-grunt-tasks')(grunt);

  // project configuration
  grunt.initConfig({
    // get package.json info
    pkg: grunt.file.readJSON('package.json'),
    //// task configuration
    concat: {
      options: {
        // string to separate concatenated files
        separator: ';'
      },
      dist: {
        // files to be concatenated
        src: ['src/**/*.js'],
        // location for final js file
        // dest: `dist/${pkg.name}.js`
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    // transpile the code
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          // 'dist/<%= pkg.name %>.js': 'src/<%= pkg.name %>.js'
          'src/**/*.js': 'dist/<%= pkg.name %>.js'
        }
      }
    },
    // minify the JS code
    uglify: {
      options: {
        // banner inserted at top of output file
        // banner: `/* {pkg.name} ${grunt.template.today("dd-mm-yyy")} */\n`
        banner: '/* <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          // `dist/${pkg.name}.min.js`: [`${concat.dist.dest}`]
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    // tests
    qunit: {
      files: ['test/**/*.html' ]
    },
    // linting
    jshint: {
      // define files to be linted
      // files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.html'],
      files: ['src/**/*.js', 'test/**/*.html'],
      // configure JSHint
      options: {
        globals: {
          // jQuery: true,
          console: true,
          module: true,
          angular: true,
          require: true
        },
        undef: true,
        esversion: 6,
        // strict: false
        // VariableStatements are forbidden
        varstmt: true
      }
    },
    watch: {
      // files: [`${jshint.files}`],
      files: ['<%= jshint.files %>'],
      // tasks: ['jshint', 'quint']
      tasks: ['jshint','concat','uglify']
    }
  });

  //// npm -i load-grunt-tasks
  // load Grunt plugins and tasks
  // grunt.loadNpmTasks('grunt-contrib-uglify-es');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');


  // custom tasks
  //// run via "grunt test" in CL
  // grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('test', ['jshint']);
  //// run via simply "grunt"
  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
  grunt.registerTask('default', []);

};
