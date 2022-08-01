import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login/login";
import Signup from "../Pages/Signup/signup";
import SignupAdress from "../Pages/SignupAdress/signupAdress";
import Feed from "../Pages/Feed/feed";
import Profile from "../Pages/Profile/profile";
import Restaurant from "../Pages/Restaurant/restaurant";
import Cart from "../Pages/Cart/cart";
import ProfileEdit from "../Pages/ProfileEdit/ProfileEdit";
import AddressEdit from "../Pages/AddressEdit/AddressEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/address" element={<SignupAdress />} />
        <Route path="/addressEdit/:id" element={<AddressEdit />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/feed/:restaurantId" element={<Restaurant />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<ProfileEdit />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
