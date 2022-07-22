import React from "react";
import { ArrowBackIosNew } from "@mui/icons-material";
import { ContainerHeader, Title } from "./styled";
import { useNavigate } from "react-router-dom";
import {goToBack} from "../../Router/coordinator";

export const Header = ({ title, back }) => {
  const navigate = useNavigate()
  return (
    <ContainerHeader>
     { back && <ArrowBackIosNew onClick={()=> goToBack(navigate)} />}
      <Title>{title}</Title>
    </ContainerHeader>
  );
};

export default Header;
