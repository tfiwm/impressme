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
        'text!templates/slides/SlideContent.mu',
        'views/slides/SlideElement',
        'models/slides/SlideElement'
    ],
    function ($, _, Backbone, Mustache, template, SlideElementView, SlideElementModel) {

        var SlideContent = Backbone.View.extend({
            el: $('.slide-content'),

            initialize: function () {
                _.bindAll(
                    this,
                    'render',
                    'unrender',
                    'showSlide',
                    'appendElement',
                    'removeElement',
                    'addSlideElement',
                    'destroyAlohaElements'
                );

                $('.js_add-slide-element').on('click', this.addSlideElement);
            },

            render: function () {
                var self = this;

//                this.destroyAlohaElements();
                if (this.collection.models.length > 0) {
                    _(this.collection.models).each(function (slideElement) { // in case collection is not empty
                        self.appendElement(slideElement);
                    }, this);
                }
            },

            showSlide: function (slideModel) {
                if (this.model !== undefined) {
                    this.model.unbind("change", this.render);
                    this.model.unbind("destroy", this.unrender);
                    this.collection.unbind('remove', this.removeElement);
                    this.collection.unbind('add', this.appendElement);
                    this.unrender();
                }

                slideModel.bind('change:selected', this.render);
                slideModel.bind('destroy', this.unrender);
                this.collection = slideModel.get('elements');
                this.collection.bind("remove", this.removeElement);
                this.collection.bind("add", this.appendElement);

                this.model = slideModel;
            },

            unrender: function () {
                this.model = undefined;
                this.collection = undefined;
//                this.destroyAlohaElements();
            },

            destroyAlohaElements: function () {
                Aloha.jQuery(this.el).find('.slide-element').mahalo().remove();
            },

            addSlideElement: function () {
                var slideElement = new SlideElementModel();

                this.collection.add(slideElement);
            },

            appendElement: function (slideElementModel) {
                var slideElementView = new SlideElementView({
                        model: slideElementModel
                    }),
                    renderedView = slideElementView.render().el;

                $(this.el).append(renderedView);
            },

            removeElement: function () {
                console.log('removed Element');
            }
        });

        return SlideContent;
    }
);