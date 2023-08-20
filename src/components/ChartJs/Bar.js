import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import { useGenerateData } from "./hooks/useGenerateData";

const StyledBtn = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  border: 1px solid #777;
  border-radius: 5px;
  cursor: pointer;
`;

const options = {
  plugins: {
    legend: {
      position: "right",
    },
  },
};

export default () => {
  const { barData, updateBarData } = useGenerateData();

  return (
    <>
      <div style={{ width: "500px", height: "300px" }}>
        <Bar data={barData} options={options} />
      </div>
      <StyledBtn onClick={updateBarData}>更新</StyledBtn>
    </>
  );
};
