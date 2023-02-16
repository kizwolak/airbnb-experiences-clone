import React from "react"

export default function Card(props) {
  props = props.item;
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
    return (
      <div className="card">
        <div className="card-image">
          <img src={'../images/' + props.coverImg} className="card-photo"/>
          {badgeText && <div className="card-image-status">{badgeText}</div>}
        </div>
        <div className="rating">
          <img src='../images/star.png' />
          <p className="rating-number">&nbsp; {props.stats.rating} &nbsp;</p>
          <p className="count-loc">({props.stats.reviewCount}) · {props.location}</p>
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price"><b>From ${props.price}</b> / person</p>
      </div>
    )
}