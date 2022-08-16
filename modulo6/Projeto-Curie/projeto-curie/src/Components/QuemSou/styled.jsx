import styled from "styled-components";

export const Container = styled.div`
  padding: 99px 221px 94px 283px;
  background-color: #063447;

  display: flex;

  justify-content: space-around;

  img {
    width: 300px;
    height: 300px;
    margin-right: 100px;
  }

  button {
    width: 150px;
    height: 45px;
    margin: 32px 12px 5px 103px;
    padding: 5px 30px 7px 31px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #4eaccf;
    font-size: 17px;
    color: white;
  }
`;

export const Foto = styled.div``;
export const SobreMim = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 11px;
  grid-row-gap: 23px;
`;
