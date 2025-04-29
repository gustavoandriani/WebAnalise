import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import CalcPermutacao from "./pages/CalcPermutacao";
import CalcAnagramas from "./pages/CalcAnagramas";
import CalcArranjo from "./pages/CalcArranjo"
import CalcCombinacao from "./pages/CalcCombinacao"
import PrincipioMultiplicativo from "./pages/PrincipioMultiplicativo"


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <CalcPermutacao />
        }, {
            path: "anagramas",
            element: <CalcAnagramas />
        }, {
            path: "arranjo",
            element: <CalcArranjo />
        }, {
            path: "combinacao",
            element: <CalcCombinacao />
        }, {
            path: "principiomultiplicativo",
            element: <PrincipioMultiplicativo />
        }]
    }
])

export default router