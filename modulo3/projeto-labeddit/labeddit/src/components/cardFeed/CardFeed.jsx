import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ContainerCardFeed } from "./styled";



const CardFeed = () => {
  const  navigate = useNavigate()

return(
   <ContainerCardFeed>
     {/* {feed} */}
  <button>like</button>
  <button>deslike</button>
  <button>comentários</button>
   </ContainerCardFeed>
)
}

export default CardFeed ;
