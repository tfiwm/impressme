
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
object navigationBottom extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template0[play.api.templates.Html] {

    /**/
    def apply():play.api.templates.Html = {
        _display_ {

Seq[Any](format.raw/*1.1*/("""<div class="navbar">
    <div class="navbar-inner">
        <ul class="nav nav-pills">
            <li><a href="javascript:;">Some buttons</a></li>
            <li><a href="javascript:;">and</a></li>
            <li><a href="javascript:;">informations here</a></li>
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
                    SOURCE: /Users/mtschimev/Desktop/impressme_play/app/views/navigation/navigationBottom.scala.html
                    HASH: 23be79e795c9d8e0f06ffa3a4cf35eba5882c130
                    MATRIX: 591->0
                    LINES: 22->1
                    -- GENERATED --
                */
            