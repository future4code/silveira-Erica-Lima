import styled from "styled-components";

export const Container = styled.div`
 /* width: 1280px;
  height: 438px; */
  /* margin: 582px 0 0; */
  padding: 99px 221px 94px 283px;
  background-color: #063447;
  /* background-color: rgb(150, 215, 255); */
  /* display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
    align-content: flex-start; */


  img{
    width: 500px;
  height: 500px;
  /* object-fit: fill; */

  /* display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-end;
   */
  }

  button{ width: 150px;
  height: 45px;
  margin: 32px 12px 5px 103px;
  padding: 5px 30px 7px 31px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #4eaccf;
  font-size: 17px;
  color:white
 
  

}

`

export const Foto = styled.div`
/* width: 1280px;
  height: 818px;
  margin: 0 0 202px;
  padding: 0 0 236px; */
/* display: grid;
grid-template-columns: 1fr;
grid-template-rows: 1fr;
grid-column-gap: 11px;
grid-row-gap: 0px; */
/* display: block;
margin: 0 auto;
object-fit: cover;
order: 1;

    max-width:300px;
    max-height:300px;
    min-height:300px; 
    min-width:300px;
width: auto;
height: auto;
background-color: #0633477a; */

/* background-color:pink */
`
export const SobreMim = styled.div`

display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 11px;
grid-row-gap: 23px;
`