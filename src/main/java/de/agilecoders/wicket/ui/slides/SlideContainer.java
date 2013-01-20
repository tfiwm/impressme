package de.agilecoders.wicket.ui.slides;

import org.apache.wicket.markup.head.CssUrlReferenceHeaderItem;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.apache.wicket.markup.html.panel.Panel;

/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 16:02
 * To change this template use File | Settings | File Templates.
 */
public class SlideContainer extends Panel {
    public SlideContainer(String id) {
        super(id);


    }

    @Override
    public void renderHead(IHeaderResponse response) {
        super.renderHead(response);

        response.render(new CssUrlReferenceHeaderItem("css/ui/slides/slide-container.css", "screen", ""));
        response.render(new CssUrlReferenceHeaderItem("css/ui/slides/slide.css", "screen", ""));
    }
}
