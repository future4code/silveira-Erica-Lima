import React from "react"
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header/Header";
import { goToPost } from "../../routes/coordinator";

const FeedPage = () => {
    const navigate = useNavigate()
return(
    <div>
     
         <h1>Feed</h1>
        <button onClick={()=>goToPost(navigate)}>Postar</button>
         </div>
)
}

export default FeedPage ;