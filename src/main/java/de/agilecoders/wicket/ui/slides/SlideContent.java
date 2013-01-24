package de.agilecoders.wicket.ui.slides;

import org.apache.wicket.markup.head.CssUrlReferenceHeaderItem;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.apache.wicket.markup.html.panel.Panel;

/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 16:03
 */
public class SlideContent extends Panel {
    public SlideContent(String id) {
        super(id);
    }

    @Override
    public void renderHead(IHeaderResponse response) {
        super.renderHead(response);

        response.render(new CssUrlReferenceHeaderItem("css/ui/slides/slide-element.css", "screen", ""));
    }
}
