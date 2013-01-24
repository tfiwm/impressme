package de.agilecoders.wicket.ui.navigation;

import de.agilecoders.wicket.markup.html.bootstrap.navbar.INavbarComponent;
import de.agilecoders.wicket.markup.html.bootstrap.navbar.Navbar;
import org.apache.wicket.Component;
import org.apache.wicket.markup.html.form.Button;

/**
 * Created with IntelliJ IDEA.
 * User: mtschimev
 * Date: 23.01.13
 * Time: 21:43
 */
public class NavigationButton implements INavbarComponent {

    private String markupId;
    private Navbar.ComponentPosition position;

    public NavigationButton(String markupId, Navbar.ComponentPosition position) {
        this.markupId = markupId;
        this.position = position;

    }

    @Override
    public Component create(String markupId) {
        return new Button(markupId);  //To change body of implemented methods use File | Settings | File Templates.
    }

    @Override
    public Navbar.ComponentPosition getPosition() {
        return this.position;  //To change body of implemented methods use File | Settings | File Templates.
    }
}
