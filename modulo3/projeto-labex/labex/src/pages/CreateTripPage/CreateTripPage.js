import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToBackCreate } from "../../routes/coordinator";


export const CreateTripPages = () => {
  const [inputData, setInputData] = useState("");

  const data = (event) => {
    setInputData(event.target.value);
  };
  const navigate = useNavigate()
  
  

  return (
    <div>
      <h1>Criar Viagem</h1>
      <label>
        <input placeholder="Nome" />
      </label>{" "}
      <br></br>
      <select>
        <option value="Júpiter">Júpiter"</option>
        <option value="Marte">Marte</option>
        <option selected value="Escolha um Planeta">
          Escolha um Planeta
        </option>
        <option value="Urano">Urano</option>
        <option value="Terra">Terra</option>
        <option value="Netuno">Netuno</option>
      </select>
      <br></br>
      <input onChange={data} value={inputData} type="date" />
      <label><br></br>
        <input placeholder="Descrição" />
      </label>{" "}
      <br></br>
      <label>
        <input placeholder="Duração em dias" />
      </label>{" "}
      <br></br>
       <button onClick={()=> goToBackCreate (navigate)}>Voltar</button>
       <button>Criar</button>
    </div>
  );
}
