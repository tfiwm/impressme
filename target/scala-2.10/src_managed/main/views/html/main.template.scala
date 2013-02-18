
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
object main extends BaseScalaTemplate[play.api.templates.Html,Format[play.api.templates.Html]](play.api.templates.HtmlFormat) with play.api.templates.Template1[String,play.api.templates.Html] {

    /**/
    def apply/*1.2*/(title: String):play.api.templates.Html = {
        _display_ {

Seq[Any](format.raw/*1.17*/("""

<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8" />
        <title>"""),_display_(Seq[Any](/*8.17*/title)),format.raw/*8.22*/("""</title>
        <link rel="shortcut icon" type="image/png" href=""""),_display_(Seq[Any](/*9.59*/routes/*9.65*/.Assets.at("images/favicon.png"))),format.raw/*9.97*/("""">
        <link rel="stylesheet" href=""""),_display_(Seq[Any](/*10.39*/routes/*10.45*/.Assets.at("css/main.css"))),format.raw/*10.71*/("""" type="text/css" media="screen" title="Stylesheet" />
        <link rel="stylesheet" href=""""),_display_(Seq[Any](/*11.39*/routes/*11.45*/.Assets.at("css/bootstrap.min.css"))),format.raw/*11.80*/("""" type="text/css" media="screen" title="Stylesheet" />

        <!-- load require.js and the main configuration -->
        <script type="text/javascript" src=""""),_display_(Seq[Any](/*14.46*/routes/*14.52*/.Assets.at("js/libs/require.js"))),format.raw/*14.84*/("""" data-main=""""),_display_(Seq[Any](/*14.98*/routes/*14.104*/.Assets.at("js/main"))),format.raw/*14.125*/(""""></script>
    </head>
    <body>
        <div class="navigation-top"></div>
        """),_display_(Seq[Any](/*18.10*/navigation/*18.20*/.navigationTop(title))),format.raw/*18.41*/("""
        """),_display_(Seq[Any](/*19.10*/navigation/*19.20*/.navigationActions())),format.raw/*19.40*/("""
        <div class="container-fluid">
            <div class="row-fluid">
                """),_display_(Seq[Any](/*22.18*/slideContainer())),format.raw/*22.34*/("""
                """),_display_(Seq[Any](/*23.18*/slideContent())),format.raw/*23.32*/("""
            </div>
        </div>
        """),_display_(Seq[Any](/*26.10*/navigation/*26.20*/.navigationBottom())),format.raw/*26.39*/("""
    </body>
</html>
"""))}
    }
    
    def render(title:String): play.api.templates.Html = apply(title)
    
    def f:((String) => play.api.templates.Html) = (title) => apply(title)
    
    def ref: this.type = this

}
                /*
                    -- GENERATED --
                    DATE: Mon Feb 18 00:12:33 CET 2013
                    SOURCE: /Users/mtschimev/Desktop/impressme_play/app/views/main.scala.html
                    HASH: 40651ead0090895957ee8902729cd157c24b07ec
                    MATRIX: 504->1|596->16|717->102|743->107|845->174|859->180|912->212|989->253|1004->259|1052->285|1181->378|1196->384|1253->419|1450->580|1465->586|1519->618|1569->632|1585->638|1629->659|1752->746|1771->756|1814->777|1860->787|1879->797|1921->817|2049->909|2087->925|2141->943|2177->957|2257->1001|2276->1011|2317->1030
                    LINES: 19->1|22->1|29->8|29->8|30->9|30->9|30->9|31->10|31->10|31->10|32->11|32->11|32->11|35->14|35->14|35->14|35->14|35->14|35->14|39->18|39->18|39->18|40->19|40->19|40->19|43->22|43->22|44->23|44->23|47->26|47->26|47->26
                    -- GENERATED --
                */
            