package de.agilecoders.wicket.ui.navigation;

import org.apache.wicket.markup.head.CssUrlReferenceHeaderItem;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.apache.wicket.markup.html.panel.Panel;

/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 22:34
 */
public class NavigationActions extends Panel {
    public NavigationActions(String id) {
        super(id);


    }

    @Override
    public void renderHead(IHeaderResponse response) {
        super.renderHead(response);

        response.render(new CssUrlReferenceHeaderItem("css/ui/navigation/navigation-actions.css", "screen", ""));
    }
}
