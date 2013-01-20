/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 17:09
 */

define(['jquery', 'underscore', 'backbone', 'views/slides/SlideContainer'], function ($, _, Backbone, SlideContainer) {

    function initialize() {
        var slideContainer = new SlideContainer();
    }

    return {
        initialize: initialize
    };
});
