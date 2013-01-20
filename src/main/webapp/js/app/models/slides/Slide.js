/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    ['jquery', 'underscore', 'backbone', 'models/slides/Slide'],
    function ($, _, Backbone) {

        var SlidesCollection = Backbone.Model.extend({
            defaults: {
                number: 0
            }
        });


        return SlidesCollection;
    }
);