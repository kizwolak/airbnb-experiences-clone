import React from "react"

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card(props) {
    return (
      <div className="card">
        <div className="card-image">
          <img src={'../images/' + props.img} className="card-photo"/>
          <div className="card-image-status">SOLD OUT</div>
        </div>
        <div className="rating">
          <img src='../images/star.png' />
          <p className="rating-number">&nbsp; 5.0 &nbsp;</p>
          <p className="count-loc">(6) · USA</p>
        </div>
        <p className="card-title">Life lessons with Katie Zaferes</p>
        <p className="card-price"><b>From $136</b> / person</p>
      </div>
    )
}