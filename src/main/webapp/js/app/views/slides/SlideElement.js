/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 22.01.13
 * Time: 00:56
 */

define(
    ['jquery', 'underscore', 'backbone', 'mustache', 'text!templates/slides/SlideElement.mu'],
    function ($, _, Backbone, Mustache, template) {

        var SlideView = Backbone.View.extend({

            className: 'slide-element',

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