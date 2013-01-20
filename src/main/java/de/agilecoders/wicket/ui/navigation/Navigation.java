package de.agilecoders.wicket.ui.navigation;

import de.agilecoders.wicket.markup.html.bootstrap.navbar.Navbar;
import org.apache.wicket.markup.html.panel.Panel;
import org.apache.wicket.model.Model;

/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 14:41
 * To change this template use File | Settings | File Templates.
 */
public class Navigation extends Panel {
    public Navigation(String id) {
        super(id);

        Navbar navbar = new Navbar("navigation");
        navbar.fluid();
        navbar.brandName(Model.of("ImpressMe"));

        add(navbar);
    }
}
