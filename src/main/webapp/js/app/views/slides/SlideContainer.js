/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    [
        'jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!templates/slides/SlideContainer.mu',
        'collections/slides/SlidesCollection',
        'views/slides/Slide',
        'models/slides/Slide'
    ],
    function ($, _, Backbone, Mustache, template, SlidesCollection, SlideView, SlideModel) {

        var SlideContainer = Backbone.View.extend({
            el: $('.slide-container'),

            events: {
                'click #js_add-slide': 'addSlide'
            },

            initialize: function () {
                _.bindAll(this, 'render', 'removeSlide', 'addSlide', 'appendSlide');

                this.collection = new SlidesCollection();
                this.collection.bind("remove", this.removeSlide);
                this.collection.bind("add", this.appendSlide);

                this.counter = 0;

                this.render();
            },

            render: function () {
                var self = this;

                $(this.el).append(Mustache.to_html(template));
                _(this.collection.models).each(function (slide) { // in case collection is not empty
                    self.addSlide(slide);
                }, this);
            },

            addSlide: function () {
                var slide = new SlideModel();
                this.counter++;

                slide.set({
                    number: this.counter
                });

                this.collection.add(slide);
            },

            appendSlide: function (slideModel) {
                var slideView = new SlideView({
                    model: slideModel
                });

                $(this.el).append(slideView.render().el);
            },

            removeSlide: function (slideModel, collection, information) {
                var i;
                this.counter--;

                for (i = collection.models.length - 1; i > information.index - 1; i--) {
                    collection.models[i].set({
                        number: i + 1
                    });
                }
            }
        });


        return SlideContainer;
    }
);