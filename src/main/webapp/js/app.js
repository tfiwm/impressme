/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 17:09
 */

/**
 * SlideContainer is a singleton instance
 */
define(
    [
        'jquery',
        'underscore',
        'jqueryui',
        'backbone',
        'views/slides/SlideContainer',
        'views/slides/SlideContent'
    ],

    function ($, _, Jqueryui, Backbone, SlideContainer, SlideContent) {

        function initialize() {
            var slideContainer = new SlideContainer(),
                slideContent = new SlideContent();

            slideContainer.on('selectSlide', function (slideModel) {
                slideContent.showSlide(slideModel);
            });
        }

        return {
            initialize: initialize
        };
    }
);

