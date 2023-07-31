import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
const StyledBom = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 50vh;
  .leftBox {
    display: flex;
    flex-direction: column;
    gap: 20px;
    button {
      flex: 1;
      width: 100%;
      border: none;
      border-radius: 3px;
      padding: 10px 40px;
      box-shadow: 0 5px 7px rgba(0, 0, 0, 0.2);
      transition: all 0.1s;
      &:hover {
        background-color: #0000ff49;
        transform: scale(1.1);
      }
    }
    .close {
      &:hover {
        background-color: #ff0000d1;
        color: white;
      }
    }
  }
`;

const Bom = () => {
  const number = "10";
  const seriesName = [];
  const designs = [];
  const [list, setList] = useState([]);

  return (
    <>
      <Navbar mainTitle={"BILL OF Materials"} />
      <StyledBom>
        <div className="leftBox">
          <button className="left-buttons">Save</button>
          <button className="left-buttons">Add New</button>
          <button className="close">Close</button>
        </div>
        <div className="middleBox">
          <h2>BOM No. {number}</h2>
          <label htmlFor="Series_Name">Series Name</label>
          <select name="" id="name">
            {seriesName.map((sn, idx) => (
              <option value={sn} key={idx}>
                {sn}
              </option>
            ))}
          </select>
          <label htmlFor="design">Design</label>
          <select name="" id="name">
            {designs.map((des, idx) => (
              <option value={des} key={idx}>
                {des}
              </option>
            ))}
          </select>
        </div>
        <div className="rightBox"></div>
      </StyledBom>
    </>
  );
};

export default Bom;
