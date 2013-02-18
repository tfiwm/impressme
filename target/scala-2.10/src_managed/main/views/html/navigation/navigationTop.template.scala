
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
object navigationTop extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template1[String,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(title: String):play.api.templates.Html = {
        _display_ {

Seq[Any](format.raw/*1.17*/("""
<div class="navbar">
    <div class="navbar-inner">
        <a class="brand" href="#">"""),_display_(Seq[Any](/*4.36*/title)),format.raw/*4.41*/("""</a>
    </div>
</div>"""))}
    }
    
    def render(title:String): play.api.templates.Html = apply(title)
    
    def f:((String) => play.api.templates.Html) = (title) => apply(title)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Mon Feb 18 00:12:33 CET 2013
                    SOURCE: /Users/mtschimev/Desktop/impressme_play/app/views/navigation/navigationTop.scala.html
                    HASH: 178115fe035444ad0499118ec9c7d3116adaca12
                    MATRIX: 524->1|616->16|739->104|765->109
                    LINES: 19->1|22->1|25->4|25->4
                    -- GENERATED --
                */
            