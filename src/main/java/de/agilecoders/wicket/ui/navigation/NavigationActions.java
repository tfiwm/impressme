package de.agilecoders.wicket.ui.navigation;

import de.agilecoders.wicket.markup.html.bootstrap.navbar.Navbar;
import org.apache.wicket.markup.html.panel.Panel;

/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 22:34
 * To change this template use File | Settings | File Templates.
 */
public class NavigationActions extends Panel {
    public NavigationActions(String id) {
        super(id);

        Navbar navbar = new Navbar("navigation");
        navbar.fluid();

        add(navbar);
    }
}
