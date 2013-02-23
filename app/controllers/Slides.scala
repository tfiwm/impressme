package controllers

import play.api.mvc._
import models.Slide

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
      val qb = QueryBuilder().query(Json.obj( "selected" -> false )).sort( "number" -> SortOrder.Ascending)

      collection.find[JsValue]( qb ).toList.map {
        slides => Ok(slides.foldLeft(JsArray(List()))( (obj, slide) => obj ++ Json.arr(slide) ))
      }
    }
  }

  def get ( id : String ) = Action {
    Async {
      val qb = QueryBuilder().query(BSONDocument("_id" -> new BSONObjectID(id)))

      collection.find[JsValue]( qb ).toList.map {
        slides => Ok(slides.foldLeft(JsArray(List()))( (obj, slide) => obj ++ Json.arr(slide) ))
      }
    }
  }

  def delete ( id : String ) = Action {
    Async {
      collection.remove(BSONDocument("_id" -> new BSONObjectID(id))).map( _ =>
        Ok("true")
      )
    }
  }

  def create = Action(parse.json) {  request =>
    Async {
      collection.insert[JsValue]( request.body ).map( lastError =>
        Ok("Mongo LastErorr:%s".format(lastError))
      )
    }
  }


  def edit ( id : String ) = Action { implicit request =>
    Slide.form.bindFromRequest.fold(
      errors => Ok("false"),
      slide => AsyncResult {
        val objectId = new BSONObjectID(id)
        // create a modifier document, ie a document that contains the update operations to run onto the documents matching the query
        val modifier = BSONDocument(
          // this modifier will set the fields 'updateDate', 'title', 'content', and 'publisher'
          "$set" -> BSONDocument(
            "number" -> BSONInteger(slide.number),
            "elements" -> BSONString(slide.elements))
        )
        // ok, let's do the update
        collection.update(BSONDocument("_id" -> objectId), modifier).map { _ =>
          Ok("true");
        }
      }
    )
  }
  
}