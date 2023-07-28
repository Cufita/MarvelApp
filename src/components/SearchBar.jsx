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
      // Check if the input is a URL
      if (isURL(value)) {
        const characterName = extractCharacterNameFromURL(value);
        if (characterName) {
          const heroes = await fetchHeroes(characterName);
          setter(heroes);
        } else {
          console.error("Invalid URL");
        }
      } else {
        // If it's not a URL, assume it's the character name
        const heroes = await fetchHeroes(value);
        setter(heroes);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const isURL = (str) => {
    // Simple URL validation
    const pattern = /^(http|https):\/\/[^ "]+$/;
    return pattern.test(str);
  };

  const extractCharacterNameFromURL = (url) => {
    // Extract the character name from the URL
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 1];
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
