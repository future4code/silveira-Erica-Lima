import React from "react";
import { Main, Title } from "./styled";

export const Header = ({title}) => {
  return( <Main>
    <Title>{title}</Title>
  </Main>);
};

export default Header;