import React from "react";

//imgs
import img from "../assets/sydney.png";
import locationImg from "../assets/location.png";

function Card() {
  return (
    <div className="card">
      <img className="card--img" src={img} alt="Img" />
      <div className="card--info">
        <div className="card--location">
          <img className="card--location--img" src={locationImg} />
          <p className="card--location--text">JAPAN</p>
          <a className="card--location--link" href="">
            View on Google Maps
          </a>
        </div>
        <h1 className="card--title">Mount Fuji</h1>
        <h2 className="card--date">12 Jan, 2021</h2>
        <p className="card--description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}

export default Card;
