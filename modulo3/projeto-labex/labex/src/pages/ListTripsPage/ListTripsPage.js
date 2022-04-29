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
     console.log(response.data.trips)
     setList(response.data.trips)
   } catch(error){
     console.log(error)
   }
 }

getTrips()

}, [])


  // const listMap = list && list.map((viagem)=>{
  //  return(
  //    <div>
  //   <p>Nome: {viagem.name}</p>
  //   <p>Descrição: {viagem.description}</p>
  //   <p>Planeta: {viagem.planet}</p>
  //   <p>Duração: {viagem.durationInDays}</p>
  //   <p>Dados: {viagem.date}</p>
  //    </div>)
  // })

  return (
    <div>
      <div>
        <button onClick={()=>goToBackList(navigate)}>Voltar</button>
        <button onClick={()=>goToApplication (navigate)}>Inscrever-se</button>
      </div>

      <h1>Listas de Viagens</h1>
            {/* {listMap}  */}
      <div>
       {/* {listMap} */}
        {/* <p>Nome: {listMap.props.name}</p>
        <p>Descrição:</p>
        <p>Planeta:</p>
        <p>Duração:</p>
        <p>Dados:</p>

        */}
      </div>
    </div>
  );
}
