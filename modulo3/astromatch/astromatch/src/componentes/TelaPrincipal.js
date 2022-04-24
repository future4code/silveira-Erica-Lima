import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";

const Card = styled.div`
  dispaly: flex;
  flex-direction: column;
  justify-content: center;
  flex-flow: column-nowrap;
 
  margin-left: 33%;
  width: 25vw;
  height: 75vh;
  border: 3px solid;
  border-color: black;
  position: relative;
  box-shadow: 10px 5px 5px black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: rgb(120, 103, 191);
`;
const AstroMatch = styled.div`
  display: flex;
  justify-content: center;
  background-color: pink;
  padding: 0px;
  
`;

const Match = styled.div`
text-align: center;
  color: black;
  margin: auto;

`


function TelaPrincipal() {
  const [perfil, setPerfil] = useState();
 
  useEffect(() => {
		
	}, [perfil])


  return (
    

    <div>
      
      <Card>
        <AstroMatch>
        <h1>AstroMatch</h1>
        </AstroMatch>
      
      <Match>
        <button>Match</button>
      </Match>
      <div>
        <button>Sim</button>
        <button>Não</button>
      </div>
        
      </Card>
    </div>
    
  );
}

export default TelaPrincipal;
