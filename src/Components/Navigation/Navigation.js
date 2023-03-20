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
          src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
          alt="Logo Pokedex"
        />
        <ThemeTogglerButton />
      </Div>
      <Outlet />
    </div>
  );
};