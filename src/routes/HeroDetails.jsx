import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Marvel_Logo.png";

//Import hooks
import { useParams } from "react-router-dom";

//Import utils

import { fetchHero } from "../utils/utils";

import "./HeroDetails.css";
export default function HeroDetails() {
  let { id } = useParams();

  const [hero, setHero] = useState();

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data[0]))
      .catch((err) => console.error(err));
  }, []);

  if (!hero) return;
  return (
    <div className="container_large">
      <div className="container_header">
        <Link to="/">
          <img className="logo" src={Logo} alt="marvel logo" />
        </Link>
      </div>
      <div className="hero_details-container">
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt="hero image"
        />
        <div className="hero_details">
          <h2>{hero.name}</h2>
          {hero.description ? (
            <>
              <h4>Description</h4>
              <p>{hero.description}</p>
            </>
          ) : null}
          <div className="hero_series">
            <h4>Series</h4>
            <ul>
              {hero.series.items.map((series) => (
                <li key={series.name}>{series.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
