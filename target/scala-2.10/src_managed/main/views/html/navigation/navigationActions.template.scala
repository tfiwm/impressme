
package views.html.navigation

import play.templates._
import play.templates.TemplateMagic._

import play.api.templates._
import play.api.templates.PlayMagic._
import models._
import controllers._
import play.api.i18n._
import play.api.mvc._
import play.api.data._
import views.html._
/**/
object navigationActions extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template0[play.api.templates.Html] {

    /**/
    def apply():play.api.templates.Html = {
        _display_ {

Seq[Any](format.raw/*1.1*/("""<div class="navigation-actions">
    <div class="subnav">
        <ul class="nav nav-pills">
            <li><a href="javascript:;" class="js_add-slide">Add Slide</a></li>
            <li><a href="javascript:;" class="js_add-slide-element">Add Element</a></li>
        </ul>
    </div>
</div>"""))}
    }
    
    def render(): play.api.templates.Html = apply()
    
    def f:(() => play.api.templates.Html) = () => apply()
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Mon Feb 18 00:12:33 CET 2013
                    SOURCE: /Users/mtschimev/Desktop/impressme_play/app/views/navigation/navigationActions.scala.html
                    HASH: 488d8fd93ea4c01e63f6427f7a264ddc77e3d6e7
                    MATRIX: 592->0
                    LINES: 22->1
                    -- GENERATED --
                */
            