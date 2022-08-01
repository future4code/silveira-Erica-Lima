import styled from "styled-components";

export const Main = styled.div`
height: 100vh ;
display: flex;
flex-direction:column;
`
export const MainCart = styled.div`
align-items: center;
display: flex;
justify-content: center;
height: 5%;
font-size: 2rem
`


export const CartConfig = styled.div`
align-items: center;
display: flex;
flex-direction:column;
width: 100%;
height: 95%;
justify-content: space-between
`
export const InfoProfile = styled.div`
margin-top: 5px;
align-items: center;
display: flex;
flex-direction:column;
width: 100%;
height: 10%;
justify-content: center;
font-size: 1.2rem;
background-color: lightgray;
width: 100%;
`

export const InfoRestaurant = styled.div`
margin: 10px;
display: flex;
flex-direction:column;
width: 100%;
font-size:1.2rem;
p:nth-child(1){
  color:red;
}
`
export const CartInfo = styled.div`
margin-top: 10px;
display: flex;
flex-direction:column;
width: 100%;
`
export const EmptyCart= styled.div`
font-size:3rem;
font-size: 1.2rem;

`
export const Payment = styled.div`
margin-top: 5px;
align-items: center;
display: flex;
flex-direction:column;
width: 100%;
height: 10%;
justify-content: center;
font-size: 1.2rem;
background-color: lightgray;
width: 100%;
`