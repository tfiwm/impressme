/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 22.01.13
 * Time: 00:56
 */

define(
    ['jquery', 'underscore', 'backbone', 'mustache', 'text!templates/slides/SlideElement.mu', 'ckeditor'],
    function ($, _, Backbone, Mustache, template, CKEditor) {

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
                var self = this;
                if (!this.editor) {
                    console.log("activateEditor", this.model);
                    $(this.el).draggable("destroy").addClass('slide-element-selected').attr('contenteditable', true);
                    this.editor = CKEditor.inline(this.el, {
                        startupFocus: true,
                        on: {
                            blur: function () {
                                self.autosaveChanges();
                                self.deactivateEditor();
                            }
                        }
                    });
                }
            },

            deactivateEditor: function () {
                var self = this;

                this.editor.destroy();
                this.editor = null;
                $(this.el).removeClass('slide-element-selected')
                    .draggable().on('dblclick', self.activateEditor);

            },

            autosaveChanges: function () {
                console.log(this.editor.getData());
                this.model.set('content', this.editor.getData(), { silent: true });
            },

            remove: function () {
                this.model.destroy();
            }
        });


        return SlideView;
    }
);