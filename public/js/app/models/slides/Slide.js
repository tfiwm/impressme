/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    ['jquery', 'underscore', 'backbone', 'collections/slides/SlideElementsCollection'],
    function ($, _, Backbone, SlideElementsCollection) {

        var SlideModel = Backbone.Model.extend({

            urlRoot: "/slides",
            idAttribute: '_id',

            parse: function(response) {
                response._id = response._id['$oid'];

                return response;
            },

            initialize: function () {
                this.set("elements", new SlideElementsCollection());
            },

            defaults: {
                /**
                 * Slice number
                 */
                number: 0,

                /**
                 * Is slice selected
                 */
                selected: false,

                /**
                 * All slide elements (text, tables, ...)
                 */
                elements: null
            }
        });


        return SlideModel;
    }
);