import styled from "styled-components"
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export const ContainerHaeder= styled.div`
 width:100%;
 height:100px;
 background-color: #36b9e0;
 display: flex;
 justify-content: center;
 

 form{
    
    padding: 5px;
   
 }

 
`

export const ButtonStyled = styled(Button)`
  && {
    background-color: #36b9e0;
    color:white;
    width: 200px;
    height:55px;
    margin-top: 15px;
    border: 2px solid white;
    font-size: 18px;
    align-items: center;
    font-weight: bold;

  }
`;

export const InputMaterial = styled(TextField)`
  && {
    background-color: white;
    margin-right : 15px;
    margin-top: 15px;
   

  }
`;