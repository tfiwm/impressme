require.config({

    // Sets the js folder as the base directory for all future relative paths
    baseUrl: "assets/js",

    // 3rd party script alias names (Easier to type "jquery" than "libs/jquery, etc")
    // probably a good idea to keep version numbers in the file names for updates checking
    paths: {

        // Core Libraries
        // --------------
        "jquery": "libs/jquery.1.9.0",

        "jqueryui": "libs/jquery-ui-1.10.0",

        "underscore": "libs/underscore",

        "backbone": "libs/backbone",
        //"dualstorage": "libs/plugins/backbone.dualStorage",

        "ckeditor": "libs/ckeditor/ckeditor",

        "mustache": "libs/mustache",

        "bootstrap": "libs/bootstrap",

        // Plugins
        // -------
        "text": "libs/plugins/text",
        "stylesheet": "libs/plugins/css",

        // Application Folders
        // -------------------
        "collections": "app/collections",

        "models": "app/models",

        "routers": "app/routers",

        "templates": "app/templates",

        "views": "app/views",

        "css": "../css"
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

        "ckeditor": {
            "exports": "CKEDITOR"
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