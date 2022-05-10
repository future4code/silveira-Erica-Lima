import React from "react";
import CadastroPage from "./pages/CadastroPage/CadastroPage"
import FeedPage from "./pages/FeedPage/FeedPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import PostPage from "./pages/PostPage/PostPage";
import Router from "./routes/Router"


const App = () => {
  return (
<>
 {/* <CadastroPage/>
 <FeedPage/>
 <LoginPage/>
 <PostPage/> */}
 <Router/>
</>
  );
}

export default App;
