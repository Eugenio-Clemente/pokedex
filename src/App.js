import { AppRouter } from "./AppRouter";
import { PokemonProvider } from "./Contexts/PokemonProvider";
import { ThemeProvider } from "./Contexts/Theme-provider";
import { GlobalStyles } from "./GlobalStyles";

export function App() { 
  return (
    <ThemeProvider>
      <PokemonProvider>
        <GlobalStyles/>
        <AppRouter />
      </PokemonProvider>
    </ThemeProvider>
  );
}