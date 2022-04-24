import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import TelaPrincipal from "./componentes/TelaPrincipal";
import TelaMatches from "./componentes/TelaMatches"


const EstiloGeral = styled.div`
* {
	
  position: relative;
}
`;
 function App() {

 const [telaAtual, setTelaatual] = useState();

 const trocaTela = () => {
   switch()
 }

  return (
    <EstiloGeral>
      <TelaPrincipal/>
    </EstiloGeral>
    
  );
  }
 
  

export default App