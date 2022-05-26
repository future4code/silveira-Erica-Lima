import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import ErroPage from "../pages/ErroPage/ErroPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = ({rightButton, setRightButton}) => {
  return (
 
   
     <Routes>
         <Route index element = { <LoginPage rightButton={rightButton} setRightButton={setRightButton} />}/>
         <Route path ="/cadastro" element = {<CadastroPage rightButton={rightButton} setRightButton={setRightButton}  />}/>
         <Route path = "/feed" element= {<FeedPage/>}/>
         <Route path = "/post/:id" element= {<PostPage/>}/>
         <Route path = "*" element= {<ErroPage/>}/>
     </Routes>
    
  );
};

export default Router;
