import React, { useEffect, useState } from "react";

export default function CreateTripPages() {
  const [inputData, setInputData] = useState("");

  const data = (event) => {
    setInputData(event.target.value);
  };

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
    </div>
  );
}
