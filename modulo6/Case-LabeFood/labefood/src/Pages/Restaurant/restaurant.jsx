import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import {useParams} from "react-router-dom"
import { CardRestaurant, Main } from "./styled";
import CardRestaurantDetails from "../../Components/CardRestaurantDetails/CardRestaurantDetails";

const Restaurant = () => {
    const {restaurantId} = useParams()
    const [restaurant, setRestaurant] = useState({})
  const getRestaurant = () =>{
    axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
      headers: {
        auth: window.localStorage.getItem("token"),
      },
    })
    .then((res)=>{
      console.log(res.data)
      setRestaurant(res.data.restaurant)
      .catch((err)=>{
        console.log(err)
      })
    })
  }
  return (
  <Main>
    <CardRestaurant>
    <CardRestaurantDetails restaurant={restaurant}/>
    </CardRestaurant>
    </Main>
    );
};

export default Restaurant;