import { useContext } from "react";
import { Button } from "./styles";
import { ThemeContext, themes } from "../../Contexts/Theme-context";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClickTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <div>
      <Button
        onClick={onClickTheme}
        style={{ color: theme.color, backgroundColor: theme.background }}
        onChange={onClickTheme}
      >
        {theme === themes.light ? "🌞" : "🌑"}
      </Button>
    </div>
  );
};
