package de.agilecoders.wicket.ui.navigation;

import de.agilecoders.wicket.markup.html.bootstrap.navbar.Navbar;
import org.apache.wicket.markup.head.CssUrlReferenceHeaderItem;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.apache.wicket.markup.html.panel.Panel;
import org.apache.wicket.model.Model;

/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 14:41
 */
public class NavigationTop extends Panel {
    public NavigationTop(String id) {
        super(id);

        Navbar navbar = new Navbar("navigation");
        navbar.fluid();
        navbar.brandName(Model.of("ImpressMe"));

        add(navbar);
    }

    @Override
    public void renderHead(IHeaderResponse response) {
        super.renderHead(response);

        response.render(new CssUrlReferenceHeaderItem("css/ui/navigation/navigation-top.css", "screen", ""));
    }
}
