import { useEffect, useState } from "react";
import { PokemonContext } from "../Contexts/PokemonContext";

const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";
    const response = await fetch(`${baseURL}pokemon/${id}`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getAllPokemons = async (limit = 10) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );

      const data = await response.json();
      const promises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return data;
      });
      const results = await Promise.all(promises);
      setAllPokemons([...results]);
      setLoading(false);
    };
    getAllPokemons();
  }, [offset]);

  const onClickLoadMore = () => {
    setOffset(offset + 10);
  };

  const onClickPrevious = () => {
    setOffset(offset - 10);
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        getPokemonByID,
        onClickLoadMore,
        onClickPrevious,
        loading,
        setLoading,
        offset,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider };
