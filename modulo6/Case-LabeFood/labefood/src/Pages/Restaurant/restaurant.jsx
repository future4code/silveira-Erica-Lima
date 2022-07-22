import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import {useParams} from "react-router-dom"
import { CardRestaurant, Category, Main, SectionProductByCategory } from "./styled";
import CardRestaurantDetails from "../../Components/CardRestaurantDetails/CardRestaurantDetails";
import CardProduct from "../../Components/CardProduct/CardProduct";
import Header from "../../Components/Header/Header";



const Restaurant = () => {
    const {restaurantId} = useParams()
    const [restaurant, setRestaurant] = useState({})
    const [categories, setCategories] = useState([])
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

  useEffect(()=>{
    getRestaurant()
  },[])
  useEffect(()=>{
    if(restaurant.products){
      const newCategories=[]
       for(const product of restaurant.products){
       if(! newCategories.includes(product.category)){
        newCategories.push(product.category)
       }
       
       }
 
      setCategories(newCategories)
    }
  
  },[restaurant])
  return (
  <Main>
  <Header title={"Restaurante"} back={true}/>
    <CardRestaurant>
    <CardRestaurantDetails restaurant={restaurant}/>
    {
      restaurant.products && categories.map((category)=>{
        return <SectionProductByCategory>
          <Category>{category}</Category>
          {
       restaurant.products
       .filter((product)=>{
        return product.category === category
       }).map((product)=>{
        return <CardProduct product={product} key={product.id}/>
      })
    }
        </SectionProductByCategory> 
      })
    }
    
    </CardRestaurant>
    </Main>
    );
};

export default Restaurant;