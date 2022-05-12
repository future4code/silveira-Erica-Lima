import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed1 } from "../routes/coordinator";

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            goToFeed1(navigate)
        }
    },[navigate])
}

export default useUnprotectedPage