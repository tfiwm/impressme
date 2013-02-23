package models

import org.jboss.netty.buffer._
import org.joda.time.DateTime
import play.api.data._
import play.api.data.Forms._
import play.api.data.format.Formats._
import play.api.data.validation.Constraints._

import reactivemongo.bson._
import reactivemongo.bson.handlers._
import java.util

case class Slide (
    id: Option[BSONObjectID],
    number: Integer,
    elements: String
)
// Turn off your mind, relax, and float downstream
// It is not dying...
object Slide {
  implicit object SlideBSONReader extends BSONReader[Slide] {
    def fromBSON(document: BSONDocument) :Slide = {
      val doc = document.toTraversable
      Slide(
        doc.getAs[BSONObjectID]("_id"),
        doc.getAs[BSONInteger]("number").get.value,
        doc.getAs[BSONString]("elements").get.value
      )
    }
  }
  implicit object SlideBSONWriter extends BSONWriter[Slide] {
    def toBSON(slide: Slide) = {
      BSONDocument(
        "_id" -> slide.id.getOrElse(BSONObjectID.generate),
        "number" -> BSONInteger(slide.number),
        "elements" -> BSONString(slide.elements)
      )
    }
  }
  val form = Form(
    mapping(
      "id" -> optional(of[String] verifying pattern(
        """[a-fA-F0-9]{24}""".r,
        "constraint.objectId",
        "error.objectId")),
      "number" -> number(),
      "elements" -> text

    //rewrite to Slide
    ) { (id, number, elements) =>
      Slide(
        id.map(new BSONObjectID(_)),
        number,
        elements)
    } { slide =>
      Some(
        (slide.id.map(_.stringify),
          slide.number,
          slide.elements)
      )
    })
}
