import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToBackList } from "../../routes/coordinator";
import { goToApplication } from "../../routes/coordinator";
import { Button } from "./styled";
import { H1 } from "./styled";

export const ListTripsPage = () => {
const navigate = useNavigate()

const [list, setList] = useState({})

useEffect (() =>{
  const aluno = "erica-lima-silveira"
 const getTrips = async () => {
   try{
     const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
     console.log(response.data.trips)
     setList(response.data.trips.id)
   } catch(error){
     console.log(error)
   }
 }

getTrips()

}, [list])


  // const listMap = list && list.map((viagem)=>{
  //  return(
  //    <div>

  //      {viagem.name}
  
  //   {/* <p>Nome: {viagem.name}</p>
  //   <p>Descrição: {viagem.description}</p>
  //   <p>Planeta: {viagem.planet}</p>
  //   <p>Duração: {viagem.durationInDays}</p>
  //   <p>Dados: {viagem.date}</p> */}
  //    </div>)
  // })

  return (
    <div>
      <div>
        <Button onClick={()=>goToBackList(navigate)}>Voltar</Button>
        <Button onClick={()=>goToApplication (navigate)}>Inscrever-se</Button>
      </div>

     
      <H1>

      <h1>Listas de Viagens</h1>

       {/* {listMap} */}
        

        
      </H1>
    </div>
  );
}
