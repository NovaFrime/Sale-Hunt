import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.shop_location}</p>
      <p>{props.rating_star}</p>
      <p>{props.short_url}</p>
      <p className="discount">{props.raw_discount}</p>
      <p>{props.price}</p>
      <p>{props.product_id}</p>
    </div>
  );
 }
 export default Card;
 