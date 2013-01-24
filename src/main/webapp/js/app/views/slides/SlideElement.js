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

            events: {
                'dblclick': 'activateEditor'
            },

            initialize: function () {
                _.bindAll(this, 'render', 'unrender', 'remove', 'activateEditor', 'deactivateEditor', 'autosaveChanges');

                this.model.bind('remove', this.unrender);
                this.model.bind('change', this.render);
            },

            render: function () {
                $(this.el).html(Mustache.to_html(template, this.model.attributes));
                $(this.el).draggable();
                return this;
            },

            unrender: function () {
                $(this.el).remove();
            },

            activateEditor: function () {
                if (this.model.get('alohaId') === null) {
                    console.log("activateEditor", this.model);
                    $(this.el).draggable("destroy").addClass('slide-element-selected');
                    this.model.set('alohaId', Aloha.jQuery(this.el).aloha().attr('id'), { silent: true });
                    Aloha.bind('aloha-smart-content-changed', this.autosaveChanges);
//                    Aloha.bind('aloha-editable-deactivated', this.deactivateEditor);
                }
            },

            deactivateEditor: function (event, editable) {
                var self = this;

                console.log(event, editable, "deactivated");
                this.model.set('alohaId', null, { silent: true });
                Aloha.unbind('aloha-smart-content-changed', this.autosaveChanges);
                Aloha.unbind('aloha-editable-deactivated', this.deactivateEditor);


                /*
                 * @TODO WTF why the hell we need this damn next tick...
                 * must be something wrong with their implementation on event triggering
                 */
                window.setTimeout(function () {
                    var left = $(self.el).css('left'),
                        top = $(self.el).css('top'),
                        $newEl = $('<div></div>').addClass(self.className).html(self.model.get('content'));

                    Aloha.jQuery(self.el).removeClass('slide-element-selected').mahalo();

                    /*
                     * mahalo is not deleting all events
                     * this means draggable is not working anymore
                     *
                     * need to replace it with a clean element
                     */
                    $(self.el).replaceWith($newEl.css({
                        left: left,
                        top: top,
                        position: 'relative'
                    }).draggable().on('dblclick', self.activateEditor));
                }, 0);
            },

            autosaveChanges: function (event, editable) {
                if (editable.editable.obj.get(0) === this.el) {
                    console.log('autosaveChanges', event, editable, this.el);
                    this.model.set('content', $(this.el).html(), { silent: true });

                    if (editable.triggerType === "blur") {
                        this.deactivateEditor(event, editable);
                    }
                }
            },

            remove: function () {
                this.model.destroy();
            }
        });


        return SlideView;
    }
);