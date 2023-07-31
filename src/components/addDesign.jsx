import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { IoPlaySkipBack, IoPlaySkipForwardSharp } from "react-icons/io5";

const StyledDesign = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-height: 60vh;
  .leftBox {
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
    width: 30vw;
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
        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
      }
    }
    .save {
      background-color: #d4e2d4;
      color: black;
      border: none;
      border-radius: 5px;
      box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
      padding: 5px;
    }
    .addNew {
      border: none;
      padding: 5px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      gap: 5px;
      button {
        flex: 1;
        background-color: #54609d;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
      }
    }
    .del {
      border: none;
      padding: 5px;
      border-radius: 5px;
      display: flex;
      justify-content: space-between;
      gap: 5px;
      button {
        flex: 1;
        background-color: orange;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
      }
      .close {
        background-color: red;
      }
    }
  }
`;

const AddDesign = () => {
  const number = "10";
  const series = [
    "Golden",
    "Silver",
    "Metallic",
    "Premium",
    "Polymer",
    "General",
  ];

  return (
    <>
      <Navbar mainTitle={"DESIGN MASTER"} />
      <StyledDesign>
        <div className="leftBox">
          <h2>Sr. No. {number}</h2>

          <div className="series">
            <label htmlFor="series">Series</label>
            <select name="" id="name">
              {series.map((s, idx) => (
                <option value={s} key={idx}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="design">
            <label htmlFor="design">Design</label>
            <input type="text" className="input_design" />
          </div>

          <div className="rate">
            <label htmlFor="rate">Rate</label>
            <input type="number" className="input_rate" />
          </div>
        </div>
        <div className="middleBox">
          <div className="seriesId">
            <label htmlFor="series_id">Series ID</label>
            <select name="" id="series_id"></select>
          </div>

          <label htmlFor="uom" className="uom">
            UOM :<>Sq.ft.</>
          </label>

          <div className="dieId">
            <label htmlFor="diel">Diel ID</label>
            <select name="" id="diel_id">
              <option value={30} /*key={idx}*/></option>
            </select>
          </div>
        </div>
        <div className="rightBox">
          <div className="move">
            <button type="button">
              <IoPlaySkipBack />
            </button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button">
              <IoPlaySkipForwardSharp />
            </button>
          </div>
          <button type="button" className="save">
            Save
          </button>
          <div className="addNew">
            <button type="button">Add New</button>
            <button type="button">Add New Series</button>
          </div>
          <div className="del">
            <button type="button">Delete Record</button>
            <button type="button" className="close">
              Close
            </button>
          </div>
        </div>
      </StyledDesign>
    </>
  );
};

export default AddDesign;
