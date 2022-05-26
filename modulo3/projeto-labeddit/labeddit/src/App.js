import React, { useState } from "react";
import Router from "./routes/Router";
import GlobalStyle from "./globalStled/GlobalStyle"
import Header from "./components/header/header/Header";
import { BrowserRouter } from "react-router-dom";


const App = () => {
  const token =localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token ? "Entrar " : "Login")


  return (


<div>
  <BrowserRouter>
 <GlobalStyle/>
 <Header rightButton={rightButton} setRightButton={setRightButton} />  
<Router  rightButton={rightButton} setRightButton={setRightButton} />  
</BrowserRouter> 

 
</div> 


  );
}

export default App;
