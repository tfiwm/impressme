/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    ['jquery', 'underscore', 'backbone', 'models/slides/Slide'],
    function ($, _, Backbone, Slide) {

        var SlidesCollection = Backbone.Collection.extend({
            model: Slide
        });


        return SlidesCollection;
    }
);