package controllers

import play.api.mvc._

// Reactive Mongo imports
import reactivemongo.api._
import reactivemongo.bson._
import reactivemongo.bson.handlers.DefaultBSONHandlers._

// Reactive Mongo plugin
import play.modules.reactivemongo._
import play.modules.reactivemongo.PlayBsonImplicits._

// Play Json imports
import play.api.libs.json._
import play.api.Play.current

object Slides extends Controller with MongoController {
  val db = ReactiveMongoPlugin.db
  lazy val collection = db("slides")
  
  def all = Action { request =>
    Async {
      val qb = QueryBuilder().query(Json.obj( "id" -> "51269ef3713bf0df2d579b25" )).sort( "number" -> SortOrder.Ascending)

      collection.find[JsValue]( qb ).toList.map {
        slides => Ok(slides.foldLeft(JsArray(List()))( (obj, slide) => obj ++ Json.arr(slide) ))
      }
    }
  }

  def get = Action {
    Ok("{ id: 1, number: 1}");
  }

  def create = Action(parse.json) {  request =>
    Async {
      collection.insert[JsValue]( request.body ).map( lastError =>
        Ok("Mongo LastErorr:%s".format(lastError))
      )
    }
  }


  def put = Action {
    Ok("");
  }
  
}