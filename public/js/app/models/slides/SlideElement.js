/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 18:06
 */
define(
    ['jquery', 'underscore', 'backbone'],
    function ($, _, Backbone) {

        var Model = Backbone.Model.extend({

            defaults: {
                content: '<b>Content of this Element</b>',
                editorId: null
            }

        });

        return Model;
    }
);