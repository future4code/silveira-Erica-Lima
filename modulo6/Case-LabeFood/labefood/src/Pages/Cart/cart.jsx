import React from "react";
import { Main, MainCart, CartConfig, InfoProfile  } from "./styled";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/useRequestData";
const Cart = () => {

  const profile = useRequestData({}, `${BASE_URL}/profile`)

  return( 
  <Main>
    <MainCart>
        <p>Meu Carrinho</p>
    </MainCart>
    <CartConfig>
    <InfoProfile >
        <p>Endereço de entregar</p>
        <p>{profile[0].user}</p>
    </InfoProfile >
    <div>
    <p>Carrinho vazio</p>
    </div>
    <div>
    <p>Frete R$00,00</p>
    </div>
    <div>
    <p>Subtotal</p>
    <p>R$00,00</p>
    </div>
    <h1>Forma de pagamento</h1>
    <form>
    <label>Dinheiro</label>
    
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label>Cartão de crédito</label>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
   
            <button>Confirmar</button>

    </form>
    </CartConfig>
    </Main>
  );
};

export default Cart ;