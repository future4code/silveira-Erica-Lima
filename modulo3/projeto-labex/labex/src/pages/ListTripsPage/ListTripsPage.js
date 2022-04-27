import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToBackList } from "../../routes/coordinator";
import { goToApplication } from "../../routes/coordinator";

export const ListTripsPage = () => {
const navigate = useNavigate()

const [list, setList] = useState({})

useEffect (() =>{
  const aluno = "erica-lima-silveira"
 const getTrips = async () => {
   try{
     const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
     console.log(response.data)
     setList(response.data)
   } catch(error){
     console.log(error)
   }
 }

getTrips()

}, [])


  // const listMap = list && list.map((viagem)=>{
  //  return(
  //    <div>
  //    {viagem.name}</div>)
  // })

  return (
    <div>
      <div>
        <button onClick={()=>goToBackList(navigate)}>Voltar</button>
        <button onClick={()=>goToApplication (navigate)}>Inscrever-se</button>
      </div>

      <h1>Listas de Viagens</h1>

      <div>
        {/* {listMap()} */}
        {/* <p>Nome:</p>
        <p>Descrição:</p>
        <p>Planeta:</p>
        <p>Duração:</p>
        <p>Dados:</p> */}

        <ol>
          <ul>
            <li>Nome:</li>
            <li>Descrição:</li>
            <li>Planeta:</li>
            <li>Duração:</li>
            <li>Dados:</li>
          </ul>
        </ol>
        
      </div>
    </div>
  );
}
