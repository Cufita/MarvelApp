import React, { useRef } from "react";
export default function SearchBar({ setter }) {
  let input = useRef("");

  const handleClick = async (e) => {
    let value = input.current.value;
    if (value == "") return;

    try {
      let heroes = await fetchHeroes(value);
      console.log("heroes", heroes);
      setter(heroes);
    } catch (err) {
      return console.error(err);
    }
  };

  return (
    <form action="">
      <input type="text" placeholder="Search Hero..." ref={input} />
      <button
        onClick={() => {
          handleClick;
        }}
      >
        Search
      </button>
    </form>
  );
}
