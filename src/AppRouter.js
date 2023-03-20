import { Route, Routes } from "react-router-dom"
import { Navigation } from "./Components/Navigation/Navigation"
import { PokemonPage, HomePage} from "./Pages"

const AppRouter = () => {
    return <Routes>
        <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="pokemon/:id" element={<PokemonPage />} />
        </Route>
        <Route path="*" element={<Navigation to='/'/>} />
    </Routes>
}

export { AppRouter }