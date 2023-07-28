import React from "react";
import { useState, useEffect } from "react";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Card from "../components/Card";

import { fetchHeroes } from "../utils/utils";

const IMAGE_SIZE = "portrait_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState();

  function getRandomLetter() {
    const minCharCode = "a".charCodeAt(0);
    const maxCharCode = "z".charCodeAt(0);
    const randomCharCode =
      Math.floor(Math.random() * (maxCharCode - minCharCode + 1)) + minCharCode;
    return String.fromCharCode(randomCharCode);
  }

  const randomLetter = getRandomLetter();

  useEffect(() => {
    fetchHeroes(randomLetter)
      .then((data) => setHeroes(data))
      .catch((err) => console.error(err));
  }, []);

  let cards;

  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
        name={hero.name}
        key={hero.id}
      />
    ));
  }

  return (
    <Container>
      <SearchBar setter={setHeroes} />
      <Table>{cards ? cards : null}</Table>
    </Container>
  );
}
