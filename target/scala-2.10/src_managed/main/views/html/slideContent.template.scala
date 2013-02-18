
package views.html

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
object slideContent extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template0[play.api.templates.Html] {

    /**/
    def apply():play.api.templates.Html = {
        _display_ {

Seq[Any](format.raw/*1.1*/("""<div class="slide-content span10 well"></div>"""))}
    }
    
    def render(): play.api.templates.Html = apply()
    
    def f:(() => play.api.templates.Html) = () => apply()
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Mon Feb 18 00:12:33 CET 2013
                    SOURCE: /Users/mtschimev/Desktop/impressme_play/app/views/slideContent.scala.html
                    HASH: 7cc4e6d4cd952fd6220d9eef3e2a091bc3d86777
                    MATRIX: 576->0
                    LINES: 22->1
                    -- GENERATED --
                */
            