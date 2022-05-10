import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import ErroPage from "../pages/ErroPage/ErroPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
    
     <Routes>
         <Route index element = {<LoginPage/>}/>
         <Route path ="cadastro/:id" element = {<CadastroPage/>}/>
         <Route path = "feed" element= {<FeedPage/>}/>
         <Route path = "post" element= {<PostPage/>}/>
         <Route path = "*" element= {<ErroPage/>}/>
     </Routes>
    </BrowserRouter>
  );
};

export default Router;
