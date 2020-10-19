module.exports = function (grunt) {
    console.log("Inicio ejecucion grunt");
    require("load-grunt-tasks")(grunt);
    grunt.initConfig(
        {
            jshint: {
                sample: {
                    files: "www/src/**/*.js"
                }
            },
            watch: {
                sample: {
                    files: "www/src/**/*.js",
                    tasks: ['jshint'],
                    options: {
                        livereload: true,
                    }
                }                
            },
            connect: {
                server: {
                    options: {
                        base: 'www',
                        port: 9000,
                        keepalive: true//,
                        /*open: {
                            target: 'http://localhost:9000/index.html',
                            appName: 'chrome',
                            callback: function () {
                                console.log("Ingresando a pagina");
                                return;
                            }
                        }*/
                    }
                }
            }
        }
    );
    grunt.registerTask(
        "default",
        [

        ]
    );
    console.log("Fin ejecucion grunt");
}
