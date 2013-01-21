package de.agilecoders.wicket.ui.navigation;

import de.agilecoders.wicket.markup.html.bootstrap.navbar.Navbar;
import org.apache.wicket.markup.html.panel.Panel;

/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 20.01.13
 * Time: 22:18
 */
public class NavigationBottom extends Panel {
    public NavigationBottom(String id) {
        super(id);

        Navbar navbar = new Navbar("navigation");
        navbar.fluid();


        add(navbar);
    }
}
