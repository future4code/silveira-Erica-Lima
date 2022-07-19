import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/login"
import Signup from "../Pages/Signup/signup";
import SignupAdress from "../Pages/SignupAdress/signupAdress";
import Feed from "../Pages/Feed/feed";
import Profile from "../Pages/Profile/profile";
import Restaurant from "../Pages/Restaurant/restaurant";
import Cart from "../Pages/Cart/cart";
 
export const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route index element= {<Login/>}/>
            <Route path='/signup' element= {<Signup/>}/>
            <Route path='/signup/adress' element= {<SignupAdress/>}/>
            <Route path='/feed' element= {<Feed/>}/>
            <Route path='/feed/:restaurantId' element= {<Restaurant/>}/>
            <Route path='/profile' element= {<Profile/>}/>
            <Route path='/cart' element= {<Cart/>}/>
        </Routes>
        </BrowserRouter>
    )
}