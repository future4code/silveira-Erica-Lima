import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  height: 5%;
  display: grid;
grid-template-columns: 5fr repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 13px;
grid-row-gap: 1px;

  h2 {
    width: 800px;
    height: 25px;
    margin: 0 192px 139px 0;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.28px;
    color: #fff;
    
  }
`;
export const ButtonQuemSou = styled.button`
  font-family: Montserrat;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: black;
  width: 180px;
  height: 60px;
  margin: 32px 12px 0 1px;
  padding: 5px 30px 7px 31px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #82d0d9;
`;
export const ButtonContato = styled.button`
  width: 180px;
  height: 60px;
  margin: 32px 12px 0 1px;
  padding: 5px 30px 7px 21px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #82d0d9;
  font-family: Montserrat;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: #4eaccf;
  align-items: center;
`;
export const ButtonProjetos = styled.button`
  width: 180px;
  height: 60px;
  margin: 32px 12px 0 1px;
  padding: 5px 10px 7px 1px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #82d0d9;
  font-family: Montserrat;
  font-size: 26px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  text-align: center;
  color: #4eaccf;
  align-items: center;
`;
