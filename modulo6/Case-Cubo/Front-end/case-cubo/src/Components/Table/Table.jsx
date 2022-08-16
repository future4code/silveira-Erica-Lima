import React, { useState } from "react";
import { TableStyled } from "./styled";
import { Chart } from "react-google-charts";
import axios from "axios";


function Table() {
  // const [firstName, setFirstName] = useState("")
  // const [lasterName, setLasterName] = useState("")
  // const [participation, setParticipation] = useState("")
  const [select, setSelect] = useState("")

 const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

 const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};
const participationApi = (event) =>{
  event.preventDefault();

  axios.get(`https://projeto-case-cubo.herokuapp.com/participation/select`)
  .then((res)=>{
      
      console.log(res.result.data)
      
  })
  .catch((err)=>{
      console.log(err); 

  })
}
console.log(participationApi)

  return (
    <div>
      <h1>Participation</h1>
      <p>Individual data in table and graphic representations</p>
      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
      <TableStyled >
        <thead>
          <tr>
          <th>&nbsp;</th>
            <th>First Name</th>
            <th>Laster Name</th>
            <th>Participation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Id</td>
            <td>01</td>
            <td>Laster Name</td>
            <td>Participation</td>
          </tr>
        </tbody>
      </TableStyled>
    </div>
  );
}

export default Table;
