import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import { BoxInformTimePrice } from "../../Components/CardRestaurant/styled";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { CardsRestaurants, Main, InputSearch, Menu, MenuItem } from "./styled";

const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  // const {setters, states} = useGlobal()
  const [categoryRestaurant, setCategoryRestaurant] = useState([]);
  const [valueCategory, setValueCategory] = useState("");

  const [inputText, setInputText] = useState();
  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setRestaurants(res.data.restaurants);
        setCategoryRestaurant(res.data.restaurants.category);
        filterCategory(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const filterCategory = (restaurants) => {
    const arrayAux = [];
    restaurants.map((res) => {
      arrayAux.push(res.category);
    });
    const takeOuRepeat = [...new Set(arrayAux)];

    const changeObjectArry = [];

    takeOuRepeat.map((category) => {
      const insertObj = { category, select: false };
      changeObjectArry.push(insertObj);
    });
    setCategoryRestaurant(changeObjectArry);
  };

  useEffect(() => {
    getRestaurants();
  }, []);
  const filterRestaurant = restaurants
    .filter((restaurant) =>
      inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLowerCase())
        : true
    )

    .filter((restaurant) =>
      valueCategory
        ? restaurant.category
            .toLowerCase()
            .includes(valueCategory.toLocaleLowerCase())
        : true
    )

    .map((restaurant) => {
      return <CardRestaurant restaurant={restaurant} />;
    });

  const changeCategory = (category) => {
    setValueCategory(category);

    const result = categoryRestaurant.map((cat) => {
      if (cat.category === category) {
        return {
          ...cat,
          select: true,
        };
      } else {
        return {
          ...cat,
          select: false,
        };
      }
    });
    setCategoryRestaurant(result);
  };

  return (
    <Main>
      <Header title={"Ifuture"} />

      <BoxInformTimePrice>
        <InputSearch
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </BoxInformTimePrice>
      <CardsRestaurants>
        <Menu>
          <MenuItem onClick={() => setValueCategory("")}>Todos</MenuItem>
          {categoryRestaurant.map((category) => {
           
            return (
              <MenuItem
                select={category.select}
                onClick={() => changeCategory(category.category)}
              >
                {category.category}
              </MenuItem>
            );
          })}
        </Menu>

        {filterRestaurant}
      </CardsRestaurants>
    </Main>
  );
};

export default Feed;
