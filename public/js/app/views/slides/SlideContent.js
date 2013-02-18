/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 23:03
 */

define(
    [
        'stylesheet!css/ui/slides/slide',
        'jquery',
        'underscore',
        'backbone',
        'mustache',
        'text!templates/slides/SlideContent.mu',
        'views/slides/SlideElement',
        'models/slides/SlideElement'
    ],
    function (css, $, _, Backbone, Mustache, template, SlideElementView, SlideElementModel) {

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
                    'addSlideElement'
                );

                $('.js_add-slide-element').on('click', this.addSlideElement);
            },

            render: function () {
                var self = this;

                console.log(this.collection.models.length);
                if (this.collection.models.length > 0) {
                    _(this.collection.models).each(function (slideElement) { // in case collection is not empty
                        self.appendElement(slideElement);
                    }, this);
                }
            },

            showSlide: function (slideModel) {
                if (this.model !== undefined) {
                    this.model.unbind("change:selected", this.render);
                    this.model.unbind("destroy", this.unrender);
                    this.collection.unbind('remove', this.removeElement);
                    this.collection.unbind('add', this.appendElement);
                    this.unrender();
                }

                this.collection = slideModel.get('elements');
                this.collection.bind("remove", this.removeElement);
                this.collection.bind("add", this.appendElement);

                slideModel.bind('change:selected', this.render);
                slideModel.bind('destroy', this.unrender);

                this.model = slideModel;
                this.render();
            },

            unrender: function () {
                this.model = undefined;
                this.collection = undefined;
                $(this.el).empty();
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