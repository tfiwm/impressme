/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    ['jquery', 'underscore', 'backbone', 'models/slides/SlideElement'],
    function ($, _, Backbone, SlideElement) {

        var SlidesCollection = Backbone.Collection.extend({
            model: SlideElement
        });


        return SlidesCollection;
    }
);