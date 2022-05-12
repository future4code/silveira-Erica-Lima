import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardFeed from "../../components/header/cardFeed/CardFeed";
import Header from "../../components/header/header/Header";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToPost } from "../../routes/coordinator";

const FeedPage = () => {
   useProtectedPage()
    const navigate = useNavigate()
    const [postLista, setPostLista] = useState()
    // const [title, setTitle] = useState()
    // const [body, setBody] = useState()
  
      const feed = (e) => {
         
          const token = localStorage.getItem("token")
          const headers = {
            headers: {
              Authorization: token
            }
          }
          axios.get(`${BASE_URL}/posts`, headers)
  
          .then((response) => {
              console.log("Deu certo ", response)
            setPostLista(response.data)
            })
            .catch((error) => 
              // console.log("Houve erro.", error.response)
              alert(error.response.data.message)
            );
      }
      useEffect(()=>{
        feed()
      },[])

      const renderPost = postLista && postLista.map((post) =>{
        return (
          <p key={post.data}>{post.data}</p>
        )
      })
    
return(
    <div>
     
      
         <Header/>

         <form >
         <label>
            <input
            placeholder="Escreva seu post..."
            />
        </label>
        <button >Postar</button>
         </form>
           {renderPost}
         <CardFeed />


         </div>
)
}

export default FeedPage