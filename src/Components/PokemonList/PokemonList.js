import { useContext } from "react";
import { Div } from "./styles";
import { PokemonContext } from "../../Contexts/PokemonContext";
import { CardPokemon } from "../CardPokemon/CardPokemon";
import { Loader } from "../Loader";

export const PokemonList = () => {
  const { allPokemons, loading } = useContext(PokemonContext);

  return loading ? (
    <Loader />
  ) : (
    <Div>
      {allPokemons.map((pokemon) => (
        <CardPokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </Div>
  );
};