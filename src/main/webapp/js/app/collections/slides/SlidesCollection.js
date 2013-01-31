/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    ['jquery', 'underscore', 'backbone', 'dualstorage', 'models/slides/Slide'],
    function ($, _, Backbone, DualStorage, Slide) {

        var SlidesCollection = Backbone.Collection.extend({
            model: Slide,
            url: "/slides",
            local: true
        });


        return SlidesCollection;
    }
);