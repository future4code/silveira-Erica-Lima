import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants/urls";
import { ContainerCardFeed } from "./styled";



const CardFeed = () => {
  const  navigate = useNavigate()

return(
   <ContainerCardFeed>
     {/* {feed} */}
  <button>like</button>
  <button>deslike</button>
   </ContainerCardFeed>
)
}

export default CardFeed ;
