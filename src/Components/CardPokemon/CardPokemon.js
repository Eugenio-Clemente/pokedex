import React from "react";
import { Img, StyleLink, Div, H2 } from "./styles";

export const CardPokemon = ({ pokemon }) => {
  return (
    <StyleLink to={`/pokemon/${pokemon.id}`}>
      <Div>
        <Img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
        <H2>{pokemon.name}</H2>
      </Div>
    </StyleLink>
  );
};
