import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/homepage/Home";
import AddNewCoffee from "./pages/addNewCoffee/AddNewCoffee";
import UpdateCoffee from "./pages/addNewCoffee/UpdateCoffee";
import CoffeeDetails from "./pages/addNewCoffee/CoffeeDetails";
import Login from "./pages/loginOut/Login";
import Register from "./pages/loginOut/Register";
import PrivateRouter from "./pages/PrivateRouter";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://coffee-shop-server-blond.vercel.app/coffee')
            },
            {
                path: '/add-new-coffee',
                element: <PrivateRouter>
                    <AddNewCoffee />
                </PrivateRouter>,
            },
            {
                path: '/update-coffee/:id',
                element: <PrivateRouter>
                    <UpdateCoffee />
                </PrivateRouter>,
                loader: ({params}) => fetch(`https://coffee-shop-server-blond.vercel.app/coffee/${params.id}`)
            },
            {
                path: '/coffee-details/:id',
                loader: ({params}) => fetch(`https://coffee-shop-server-blond.vercel.app/coffee/${params.id}`),
                element: <PrivateRouter>
                    <CoffeeDetails />
                </PrivateRouter>,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            }
        ]
    }
])