import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import CalcPermutacao from "./pages/CalcPermutacao";
import CalcAnagramas from "./pages/CalcAnagramas";


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
        }]
    }
])

export default router