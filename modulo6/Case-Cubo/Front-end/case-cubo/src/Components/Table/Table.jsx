import React, { useState, useEffect } from "react";
import { TableStyled } from "./styled";
import axios from "axios";
import { Chart } from "react-google-charts";

function Table() {
  const [select, setSelect] = useState([]);
  const [data, setData] = useState([])

  const participationSelectApi = () => {
    axios
      .get(`https://projeto-case-cubo.herokuapp.com/participation/select`)
      .then((res) => {
        setSelect(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    participationSelectApi();
  }, []);

  const options = {
    title: "Participation",
    pieHole: 0.4,
    is3D: false,
   };

   const array = participationSelectApi.list.map(result => {
    return [`${result.fristName}`,result.participation]
})

const data = [["Task", "Participation"],['Outros',100], ...array];

  return (
    <div>
      <h1>Participation</h1>
      <p>Individual data in table and graphic representations</p>

      <TableStyled>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>First Name</th>
            <th>Laster Name</th>
            <th>Participation</th>
          </tr>
        </thead>
        <tbody>
          {select &&
            select.map((result) => {
              return (
                <tr key={result.id}>
                  <td>{result.id}</td>
                  <td>{result.first_name}</td>
                  <td>{result.laster_name}</td>
                  <td>{result.participation}%</td>
                </tr>
              );
            })}
        </tbody>
      </TableStyled>

      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
  );
}
export default Table;
