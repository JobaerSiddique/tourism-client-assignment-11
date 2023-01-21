import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import OfferInfo from "../../Pages/OfferInfo/OfferInfo";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../../Pages/RequireAuth/PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },

            {
                path:'/offers/:id',
                element:<PrivateRoute><OfferInfo/></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/offers/${params.id}`)
            }
        ]
    }
])
export default router;