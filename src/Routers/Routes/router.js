import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddOfferings from "../../Pages/AddOfferings/AddOfferings";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ManageBooking from "../../Pages/ManageBooking/ManageBooking";
import MyBooking from "../../Pages/MyBooking/MyBooking";
import OfferInfo from "../../Pages/OfferInfo/OfferInfo";
import Payment from "../../Pages/Payments/Payment";
import PaymentSuccess from "../../Pages/Payments/PaymentSuccess";
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
                loader:({params})=> fetch(`https://tourisum-server.vercel.app/offers/${params.id}`)
            },
            {
                path:'/mybooking',
                element:<MyBooking/>
            },
            {
                path:'/managebooking',
                element:<ManageBooking/>
            },
            {
                path:'/success',
                element:<ManageBooking/>
            },
            {
                path:'/addOfferings',
                element:<AddOfferings/>
            },
            {
                path:'/payment/:id',
                element:<Payment/>,
                loader:({params})=> fetch(`https://tourisum-server.vercel.app/bookings/${params.id}`)
            },
            
        ]
    }
])
export default router;