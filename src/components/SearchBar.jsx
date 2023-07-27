import React, { useRef } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Marvel_Logo.png";

import "./SearchBarStyle.css";

// Import utils

import { fetchHeroes } from "../utils/utils";
export default function SearchBar({ setter }) {
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value == "") return;

    try {
      let heroes = await fetchHeroes(value);
      setter(heroes);
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <form action="">
      <Link to="/">
        <img className="HomeButton" src={logo} alt="" />
      </Link>
      <input type="text" placeholder="Buscar" ref={input} />
      <button onClick={handleClick}>Search</button>
    </form>
  );
}
