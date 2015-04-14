module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    grunt.initConfig({

        
        files_js: {
            all:[
                //'assets/js/vendor/bootstrap/assets/javascripts/bootstrap/*.js',
                //'assets/js/vendor/bootstrap/*.js',
                'assets/js/index.js'
            ]
        },

        files_css: {
            all:[
                //'bower_components/teste.css',
                'assets/css/style.css'
            ]
        },

        files_less: {
            all:[
                //'bower_components/teste.css',
                'bower_components/bootstrap/less/bootstrap.less',
                'assets/less/index.less'
            ]
        },

        pkg: grunt.file.readJSON('package.json'),

         uglify: {
            dev: {
                options: {
                   beautify: true
                },
                files: {
                    'assets/js/index.min.js': [
                        '<%= files_js.all %>'
                    ]
                }
            },

            prod: {
                options: {
                 
                },
                files: {
                    'assets/js/index.min.js': [
                        '<%= files_js.all %>'
                    ]
                }
            }
        },

        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['<%= themes_css.all %>'],
              dest: 'assets/css/index.css',
            },
        },

        less: {
          dev: {
            options: {
              paths: ["assets/css"],
              
              cleancss: true
            },
            files: {
              "assets/css/style.css": [
                  '<%= files_less.all %>'
                ]
            }
          },

          prod: {
            options: {
              paths: ["assets/css"],
              compress: true,
              cleancss: true,
            },
            files: {
             "assets/css/index.css": "assets/less/index.less"
            }
          }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
            },
            target: {
                files: {
                  'assets/css/index.css': [
                     '<%= files_css.all %>'
                ]
              }
            }
        },

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1,
            },
            target: {
                files: {
                  'assets/css/index.css': [
                     'assets/css/index.css'
                ]
              }
            }
        },

        notify: {
            less: {
                options: {
                    title: 'Grunt, grunt!',
                    message: 'less is all gravy'
                }
            },
            js: {
                options: {
                    title: 'Grunt, grunt!',
                    message: 'JS is all good'
                }
            }
        },

     

         watch: {
          
            js: {
              files: [
                    '<%= files_js.all %>'
                ],
                tasks: [
                  'uglify',
                  'notify:js'
                ]
            },

            less: {
                files: ['assets/less/*.less'],
                tasks: [
                  'less',
                  'notify:less'
                ]
            }
        },
    });

    grunt.registerTask('default',   ['less:dev' ,'uglify:dev' , 'concat', 'cssmin', 'notify']);
    grunt.registerTask('prod',      ['less:prod','uglify:prod', 'concat', 'cssmin', 'notify']);
}