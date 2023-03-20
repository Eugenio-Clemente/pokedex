import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../Components/Loader";
import { PokemonContext } from "../../Contexts/PokemonContext";
import { Div, Main, Img, H1, H3, H4, Span, SpanMoves } from "./styles";
export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchPokemon = async (id) => {
      const data = await getPokemonByID(id);
      setPokemon(data);
      setLoading(false);
    };
    fetchPokemon(id);
  }, [getPokemonByID, id]);

  return (
    <Main className="container main-pokemon">
      {loading ? (
        <Loader />
      ) : (
        <Div>
          <Img
            src={pokemon.sprites?.other?.dream_world?.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />

          <H1>{pokemon.name}</H1>
          <H3>
            {pokemon.types.map((type) => (
              <Span key={type.type.name}>{type.type.name}</Span>
            ))}
          </H3>
          <H3>
            {pokemon.abilities.map((abilities) => (
              <Span key={abilities.ability.name}>{abilities.ability.name}</Span>
            ))}
          </H3>
          <H4>
            {pokemon.moves.map((move) => (
              <SpanMoves key={move.move.name}>{move.move.name}</SpanMoves>
            ))}
          </H4>
        </Div>
      )}
    </Main>
  );
};
