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
                _.bindAll(this, 'render', 'unrender', 'showSlide');
            },

            render: function () {
                this.$el.html(Mustache.to_html(template, this.model.attributes));
            },

            showSlide: function (slideModel) {
                if (this.model !== undefined) {
                    this.model.unbind("change", this.render);
                    this.model.unbind("destroy", this.unrender);
                }
                slideModel.bind('change', this.render);
                slideModel.bind('destroy', this.unrender);
                this.model = slideModel;
            },

            unrender: function () {
                this.model = undefined;
                $(this.el).empty();
            }
        });

        return SlideContent;
    }
);