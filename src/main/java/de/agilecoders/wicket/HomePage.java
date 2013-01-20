package de.agilecoders.wicket;

import de.agilecoders.wicket.ui.navigation.Navigation;
import de.agilecoders.wicket.ui.slides.SlideContainer;
import de.agilecoders.wicket.ui.slides.SlideContent;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.apache.wicket.request.mapper.parameter.PageParameters;
import org.apache.wicket.markup.html.WebPage;

public class HomePage extends WebPage {
	private static final long serialVersionUID = 1L;

	public HomePage(final PageParameters parameters) {
		super(parameters);

		add(new Navigation("navigation"));
        add(new SlideContainer("slide-container"));
        add(new SlideContent("slide-content"));
    }

//    @Override
//    public void renderHead(IHeaderResponse response) {
//        super.renderHead(response);
//
//        Bootstrap.renderHead(response);
//    }

}
