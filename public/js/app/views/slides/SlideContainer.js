/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    [
        'stylesheet!css/ui/slides/slide-container',
        'jquery',
        'underscore',
        'backbone',
        'collections/slides/SlidesCollection',
        'views/slides/SlideThumb'
    ],
    function (css, $, _, Backbone, SlidesCollection, SlideView) {

        var SlideContainer = Backbone.View.extend({
            el: $('.slide-container'),

            initialize: function () {
                var self = this;

                _.bindAll(this, 'render', 'removeSlide', 'addSlide', 'appendSlide', 'changeSelection');

                $('.js_add-slide').on('click', this.addSlide);

                this.collection = new SlidesCollection();
                this.collection.bind("remove", this.removeSlide);
                this.collection.bind("add", this.appendSlide);
                this.collection.bind("change:selected", this.changeSelection);

                this.counter = 0;

                this.collection.fetch({
                    success: function(slides) {
                        self.counter = slides.length
                        self.render();
                    }
                });
            },

            render: function () {
                var self = this;

                if (this.collection.models.length > 0) {
                    _(this.collection.models).each(function (slide) { // in case collection is not empty
                        self.appendSlide(slide);
                    }, this);
                } else {
                    this.addSlide();
                }
            },

            addSlide: function () {
                this.counter++;

                this.collection.create({
                    number: this.counter
                });
            },

            appendSlide: function (slideModel) {
                var slideView = new SlideView({
                    model: slideModel
                });
                slideView.on('select', this.changeSelection);

                $(this.el).append(slideView.render().el);
            },

            removeSlide: function (slideModel, collection, information) {
                var i, wasSelected = slideModel.get('selected');
                this.counter--;

                for (i = collection.models.length - 1; i > information.index - 1; i--) {
                    collection.models[i].set({
                        number: i + 1
                    });
                }

                if (wasSelected) {
                    this.changeSelection(slideModel);
                }
            },

            changeSelection: function (slideModel) {
                var i;

                if (slideModel.changed.selected === true) {
                    this.trigger('selectSlide', slideModel);
                    for (i = this.collection.models.length; i--;) {
                        var model = this.collection.at(i);
                        if(slideModel !== model) {
                            model.save({
                                selected: false
                            });
                        }
                    }
                }
            }
        });

        return SlideContainer;
    }
);