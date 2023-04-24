import { Outlet } from "react-router-dom";
import { ThemeTogglerButton } from "../ThemeTogglerButton/ThemeTogglerButton";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/Theme-context";
import { Img, Div } from "./styles";

export const Navigation = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ color: theme.color, backgroundColor: theme.background }}>
      <Div>
        <Img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Logo Pokedex"
        />
        <ThemeTogglerButton />
      </Div>
      <Outlet />
    </div>
  );
};