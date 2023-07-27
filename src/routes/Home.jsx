import React from "react";
import { useState, useEffect } from "react";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Table from "../components/Table";
import Card from "../components/Card";
export default function Home() {
  const [heroes, setHeroes] = useState([]);

  let cards;

  if (heroes) {
    cards = heroes.map((hero) => {
      <Card
        name={hero.name}
        id={hero.id}
        key={hero.id}
        thumbnail={`${hero.thumbnail.path}`}
      />;
    });
  }
  return (
    <>
      <Container>
        <h1>Marvel Hero Searcher</h1>
        <SearchBar setter={setHeroes} />
        <Table>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Table>
      </Container>
    </>
  );
}
