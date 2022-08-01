import React from "react";
import {
  ImageRestaurant,
  ContainerCardRestaurantDetails,
  BoxInformTimePrice,
  Inform,
  NameRestaurant,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../Router/coordinator";

const CardRestaurantDetails = ({ restaurant }) => {
  const navigate = useNavigate()
  return (
    <ContainerCardRestaurantDetails onClick={()=>  goToRestaurant(navigate, restaurant.id)}>
      <ImageRestaurant src={restaurant.logoUrl} />
      <NameRestaurant>{restaurant.name}</NameRestaurant>
      <Inform>{restaurant.category}</Inform>
      <BoxInformTimePrice>
        <Inform>{restaurant.deliveryTime}</Inform>
        <Inform>{restaurant.shiping}</Inform>
      </BoxInformTimePrice>
      <Inform>{restaurant.address}</Inform>
    </ContainerCardRestaurantDetails>
  );
};

export default CardRestaurantDetails;
