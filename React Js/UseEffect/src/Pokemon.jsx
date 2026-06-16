import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemon = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    setAllPokemon(response.data.results);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="px-5 py-6">
      <button
        className="px-2 py-3 bg-emerald-400 rounded-2xl text-white"
        onClick={getData}
      >
        Get Data
      </button>
      {allPokemon.map(function (elem, idx) {
        return (
          <h1 key={idx} className="text-2xl mb-5">
            {elem.name}
          </h1>
        );
      })}
    </div>
  );
};

export default Pokemon;
