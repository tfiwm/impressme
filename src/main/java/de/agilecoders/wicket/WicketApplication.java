package de.agilecoders.wicket;

import de.agilecoders.wicket.settings.BootstrapSettings;
import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.protocol.http.WebApplication;

/**
 * Application object for your web application. If you want to run this application without deploying, run the Start class.
 * 
 * @see de.agilecoders.wicket.Start#main(String[])
 */
public class WicketApplication extends WebApplication
{    	
	/**
	 * @see org.apache.wicket.Application#getHomePage()
	 */
	@Override
	public Class<? extends WebPage> getHomePage()
	{
		return HomePage.class;
	}

	/**
	 * @see org.apache.wicket.Application#init()
	 */
	@Override
	public void init()
	{
		super.init();

        BootstrapSettings settings = new BootstrapSettings();
        settings.minify(true); // use minimized version of all bootstrap references

        Bootstrap.install(this, settings);


        // add your configuration here
	}
}
