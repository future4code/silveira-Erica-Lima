import axios from "axios";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import CardFeed from "../../components/cardFeed/CardFeed";
import Header from "../../components/header/header/Header";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import { goToPost } from "../../routes/coordinator";
import { Container, Formulario } from "./styled";

const FeedPage = ({rightButton, setRightButton}) => {
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
          <p key={post.body}>{post.body}</p>
        //   <CardFeed 
        //  key={post.}
        //  renderPost={renderPost}
        //  />
        )
      })
    
return(
    <Container>

         <Formulario >
         <label>
            <input
            placeholder="Escreva seu post..."
            />
        </label>
        <button >Postar</button>
         </Formulario>
         {renderPost}

         </Container>
)
}

export default FeedPage