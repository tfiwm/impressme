/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 * 
 * The SlideThumb in the left navigation
 */
define(
    ['jquery', 'underscore', 'backbone', 'mustache', 'text!templates/slides/SlideThumb.mu'],
    function ($, _, Backbone, Mustache, template) {

        var SlideView = Backbone.View.extend({

            className: 'slide',

            events: {
                'click .js_remove-slide': 'remove',
                'click .slide_number': 'select'
            },

            initialize: function () {
                _.bindAll(this, 'render', 'unrender', 'remove');

                this.model.bind('remove', this.unrender);
                this.model.bind('change', this.render);
            },

            render: function () {
                $(this.el).html(Mustache.to_html(template, this.model.attributes));
                if (this.model.get("selected") === true) {
                    this.$el.addClass("is-selected");
                } else {
                    this.$el.removeClass("is-selected");
                }
                return this;
            },

            unrender: function () {
                $(this.el).remove();
            },

            remove: function () {
                this.model.destroy();
            },

            select: function () {
                this.model.set({
                    selected: true
                });
            }
        });


        return SlideView;
    }
);