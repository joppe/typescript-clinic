System.config({
    baseURL: './',

    map: {
        jquery: 'bower_components/jquery/dist/jquery.js',
        underscore: 'bower_components/underscore/underscore.js',
        backbone: 'bower_components/backbone/backbone.js'
    },

    meta: {
        backbone: {
            deps: ['jquery', 'underscore']
        }
    }
});
