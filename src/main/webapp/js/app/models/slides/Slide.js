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
                elements: new SlideElementsCollection()
            }
        });


        return SlideModel;
    }
);