import { useContext } from "react";
import { Div, Button } from "./styles";
import { PokemonList } from "../../Components";
import { PokemonContext } from "../../Contexts/PokemonContext";

export const HomePage = () => {
  const { onClickLoadMore, onClickPrevious, offset } = useContext(PokemonContext);
  return (
    <>
      <PokemonList />
      <Div>
        <Button onClick={onClickLoadMore}>Carregar mais</Button>
        {offset > 0 ? <Button onClick={onClickPrevious}>Voltar</Button> : null}
      </Div>
    </>
  );
};