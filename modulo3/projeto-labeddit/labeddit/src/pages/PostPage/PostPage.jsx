import React from "react"
import Header from "../../components/header/header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
    useProtectedPage()
return(
    <div>
        <Header/>
        
        <h1>Post</h1>
        </div>
)
}

export default  PostPage;