import React from "react";

//imgs
import locationImg from "../assets/location.png";

function Card(props) {
  return (
    <div className="card">
      <img className="card--img" src={props.imageUrl} alt="Img" />
      <div className="card--info">
        <div className="card--location">
          <img className="card--location--img" src={locationImg} alt="Location"/>
          <p className="card--location--text">{props.location}</p>
          <a className="card--location--link" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">{props.title}</h1>
        <div className="card--date">
          <p>{props.startDate}</p>
          <p>{props.endDate}</p>
        </div>
        <p className="card--description">
          {props.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
