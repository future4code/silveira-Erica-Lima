import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header/Header";
import { BASE_URL } from "../../constants/urls";
import { goToPost } from "../../routes/coordinator";

const FeedPage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState()

    const feed = (e) => {
        // e.preventDefault()
        axios.get(`${BASE_URL}/posts`)
        .then((response) => {
            console.log("Deu certo ", response)
          
          })
          .catch((error) => {
            console.log("Houve erro.", error.response)
          });
    }

   console.log(feed)
    
return(
    <div>
     
      
         <Header/>
         <label>
            <input
            placeholder="Escreva seu post..."
            />
        </label>
        <button onClick={()=>goToPost(navigate)}>Postar</button>

        {feed}

         </div>
)
}

export default FeedPage ;