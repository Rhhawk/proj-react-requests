import { createBrowserRouter } from "react-router-dom";

import Home from './pages/Home'
import AllRequests from "./pages/AllRequests";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path: '/pedidos',
        element: <AllRequests />
    }
])

export default router