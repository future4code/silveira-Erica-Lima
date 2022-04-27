import React from 'react'
import './App.css';

function App() {
 return(
   <div>
      <h1> ETAPA 1 - DADOS GERAIS  </h1>
   <form className="forms">
   <label>
     1. Qual o seu nome?
    <input type="text" name="name" />
     2. Qual sua idade?
     <input type="text" name="name"/>
     3. Qual seu email?
     <input type="text" name="name"/>
     2. Qual a sua escolaridade?
     <input type="text" name="name"/>
   </label> 
   <button type="button">Proxima etapa</button>
   </form>
   </div>
  
    
   
 )
}

export default App;

