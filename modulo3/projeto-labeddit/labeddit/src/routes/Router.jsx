import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import ErroPage from "../pages/ErroPage/ErroPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <CadastroPage />
        </Route>
        <Route>
          <FeedPage />
        </Route>
        <Route>
          <LoginPage />
        </Route>
        <Route>
          <PostPage />
        </Route>
        <Route>
            <ErroPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
