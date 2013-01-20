require.config({

    // Sets the js folder as the base directory for all future relative paths
    baseUrl: "js",

    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths: {

        // Core Libraries
        // --------------
        "jquery": "libs/jquery.1.9.0.min",

        "underscore": "libs/underscore.min",

        "backbone": "libs/backbone.min",

        "mustache": "libs/mustache",

        // Plugins
        // -------
        "bootstrap": "libs/plugins/bootstrap.min",
        "text": "libs/plugins/text",

        // Application Folders
        // -------------------
        "collections": "app/collections",

        "models": "app/models",

        "routers": "app/routers",

        "templates": "app/templates",

        "views": "app/views"

    },

    use: {

    },

    // Sets the configuration for your third party scripts that are not AMD compatible
    shim: {

        // Twitter Bootstrap jQuery plugins
        "bootstrap": ["jquery"],

        // Backbone
        "backbone": {

            // Depends on underscore and jQuery
            "deps": ["underscore", "jquery"],

            // Exports the global window.Backbone object
            "exports": "Backbone"

        },

        "underscore": {
            "exports": "_"
        }
    }

});

// Includes Desktop Specific JavaScript files here (or inside of your Desktop router)
require(

    ["jquery", "underscore", "backbone", "app", "bootstrap"],

    function ($, _, Backbone, App) {

        App.initialize();

    }

);