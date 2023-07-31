import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const StyledRaw = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 60vh;
  .left {
    display: flex;
    flex-direction: column;
    width: 20vw;
    gap: 20px;
    h2 {
      border: 2px solid red;
      color: red;
      display: flex;
      justify-content: center;
    }
    .series,
    .design,
    .rate {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .middleBox {
    display: flex;
    flex-direction: column;
    width: 20vw;
    gap: 20px;
    margin-top: 5%;
    .seriesId,
    .uom,
    .dieId {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .rightBox {
    display: flex;
    flex-direction: column;
    width: 20vw;
    gap: 20px;
    .move {
      display: flex;
      justify-content: space-between;
      gap: 5px;
      button {
        flex: 1;
        background-color: #7a9d54;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 5px 5px 5px 2px black;
      }
    }
    .save {
      background-color: #d4e2d4;
      color: black;
      border: none;
      border-radius: 5px;
      padding: 5px;
    }
    .addNew {
      border: none;
      padding: 5px;
      border-radius: 5px;
    }
  }
`;

const RawMaterial = () => {
  const ID = [];
  const UOM = [];
  return (
    <div>
      <Navbar mainTitle={"RAW MATERIAL"} />
      <StyledRaw>
        <div className="left">
          <div className="input">
            <label htmlFor="ID">ID</label>
            <select name="" id="id">
              {ID.map((id, idx) => (
                <option value={id} key={idx}>
                  {id}
                </option>
              ))}
            </select>
            <label htmlFor="uom">UOM</label>
            <select name="" id="UOM">
              {UOM.map((uom, idx) => (
                <option value={uom} key={idx}>
                  {uom}
                </option>
              ))}
            </select>

            <label htmlFor="unit_price">Unit Price</label>
            <input type="number" className="unit_price" />
          </div>
        </div>
        <div className="right">
          <div className="input">
            <label htmlFor="rm_name">RM Name</label>
            <input type="text" className="rm_name" />
          </div>
        </div>

        <div className="bottom">
          <div className="first">
            <div className="together">
              <button>Save</button>
              <button>Add New</button>
            </div>
            <button className="close">Close</button>
          </div>

          <div className="second">
            <button>⏪</button>
            <button>◀︎</button>
            <button>▶</button>
            <button>⏩︎</button>
          </div>
        </div>
      </StyledRaw>
    </div>
  );
};

export default RawMaterial;
