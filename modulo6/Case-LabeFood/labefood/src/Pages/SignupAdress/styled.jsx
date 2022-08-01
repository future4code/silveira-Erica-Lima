import styled from "styled-components";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const Main = styled.div`
  padding: 10px;
 height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
 

form{
 margin-top: 50px;
  flex-direction: column;
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
  

 p{
    font-size: 2rem
  }
  
`;

export const ButtonStyled = styled(Button)`
  && {
    background-color: #e8222e;
    color: #000000;
   width: 100%;
   margin-top: 5px
  }
`;



export const InputMaterial = styled(TextField)`

    width: 100%;

`;
