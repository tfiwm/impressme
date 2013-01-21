/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 23:03
 */

define(
    [
        'jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!templates/slides/SlideContent.mu'
    ],
    function ($, _, Backbone, Mustache, template) {

        var SlideContent = Backbone.View.extend({
            el: $('.slide-content'),

            initialize: function () {
                _.bindAll(this, 'render', 'showSlide');
            },

            render: function () {
                this.$el.html(Mustache.to_html(template, this.model.attributes));
            },

            showSlide: function (slideModel) {
                this.model = slideModel;
                this.render();
            }
        });

        return SlideContent;
    }
);