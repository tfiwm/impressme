package controllers

import play.api.mvc._

object Slides extends Controller with MongoController {
  val db = ReactiveMongoPlugin.db
  lazy val collection = db("persons")
  
  def all = Action {

    Ok("[{ id: 1, number: 1}]");
  }

  def get = Action {
    Ok("{ id: 1, number: 1}");
  }

  def create = Action(parse.json) {  request =>
    Ok("Lalalala")
  }


  def put = Action {
    Ok("");
  }
  
}