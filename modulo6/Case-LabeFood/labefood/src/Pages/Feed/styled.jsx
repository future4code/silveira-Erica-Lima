import styled from "styled-components";

export const Main = styled.div``;

export const CardsRestaurants = styled.div`
  padding: 0 1rem;
  margin-top: 0.5rem;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 3.5rem;
  padding: 1rem 0.503rem 1rem 1.063rem;
  border: solid 1px #b8b8b8;
`;

export const Menu = styled.nav`
  height: 2.625rem;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 0;
  width: 100%;
  overflow-x: auto;
`;
export const MenuItem = styled.button`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: ${(p) => (p.select ? "red" : "black")};
  border: none;
  outline: none;
  padding: 0 1rem;
  background: transparent
`;
