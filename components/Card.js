import React from "react"

export default function Card(props) {
    return (
      <div className="card">
        <div className="card-image">
          <img src={'../images/' + props.img} className="card-photo"/>
          {props.openSpots === 0 && <div className="card-image-status">SOLD OUT</div>}
        </div>
        <div className="rating">
          <img src='../images/star.png' />
          <p className="rating-number">&nbsp; {props.rating} &nbsp;</p>
          <p className="count-loc">({props.count}) · {props.location}</p>
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price"><b>From ${props.price}</b> / person</p>
      </div>
    )
}