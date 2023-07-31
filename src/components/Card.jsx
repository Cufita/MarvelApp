import React from "react";
import { Link } from "react-router-dom";
import star from "../assets/star.png";

import "./Card.css";

export default function Card({ id, thumbnail, name }) {
  return (
    <Link to={`/${id}`}>
      <div className="card">
        <img className="star" src={star} alt="star" />
        <img className="mainImg" src={thumbnail} alt="thumbnail" />
        <h1 className="card-name">{name}</h1>
      </div>
    </Link>
  );
}
