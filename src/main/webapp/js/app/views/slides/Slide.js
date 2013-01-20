/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    ['jquery', 'underscore', 'backbone', 'mustache', 'text!templates/slides/Slide.mu'],
    function ($, _, Backbone, Mustache, template) {

        var SlideView = Backbone.View.extend({

            className: 'slide',

            events: {
                'click .js_remove-slide': 'remove'
            },

            initialize: function () {
                _.bindAll(this, 'render', 'unrender', 'remove');

                this.model.bind('remove', this.unrender);
                this.model.bind('change', this.render);
            },

            render: function () {
                $(this.el).html(Mustache.to_html(template, this.model.attributes));
                return this;
            },

            unrender: function () {
                $(this.el).remove();
            },

            remove: function () {
                this.model.destroy();
            }
        });


        return SlideView;
    }
);