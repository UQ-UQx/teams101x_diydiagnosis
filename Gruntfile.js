module.exports = function(grunt){

    grunt.initConfig({
        watch:{
            
            reload:{
                files:["index.html"],
                options: {
                  livereload: {
                    host: 'localhost',

                  }
                }
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('run', ["watch:reload"]);
}