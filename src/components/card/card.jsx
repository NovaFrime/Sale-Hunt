import React from "react";
import "./Card.css";

import { Rating } from '@smastrom/react-rating';
function Card(props) {
  return (
    <a href={props.short_url} key={props.product_id} className="card">
      <img src={props.image} alt={props.name} />
      <p>{props.product_id}</p>

      <h2 className="title">{props.name}</h2>
      <p>{props.shop_location}</p>
      <div className="pricesale">
        <p className="price">{props.price}</p>
        <p className="discount">{props.raw_discount}</p>
      </div>
      <Rating ratingValue = {parseInt(props.rating)
      .toFixed()} 
      readOnly
      style={{ maxWidth: 250 }}/>
    </a>
  );
 }
 export default Card;
 