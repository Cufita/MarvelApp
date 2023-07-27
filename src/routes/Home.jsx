import React from "react";
import { useState } from "react";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Card from "../components/Card";

const IMAGE_SIZE = "portrait_fantastic";

export default function Home() {
  const [heroes, setHeroes] = useState();

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
