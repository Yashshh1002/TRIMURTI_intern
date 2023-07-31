import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  .container {
    flex: 0.6;
    display: flex;
    padding: 10px;
    button {
      border: none;
      border-radius: 5px;
      padding: 7px;
      outline: none;
    }
    .leftBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 10px;
      gap: 10px;
      .masters {
        border: 1px solid gray;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        border-radius: 5px;
      }
    }
    .middleBox {
      flex: 1;
    }
    .rightBox {
      display: flex;
      flex-direction: column;
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 10px;
      gap: 10px;
      .transaction {
        border: 1px solid gray;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        border-radius: 5px;
      }
    }
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <DashboardContainer>
      <Navbar
        mainTitle={"TRIMURTI DOORS WORLD"}
        secondTitle={"Owner Dashboard"}
      />
      <div className="container">
        <div className="leftBox">
          <h3>Masters</h3>
          <div className="masters">
            <button onClick={() => navigate("/bom")}>BOM</button>
            <button onClick={() => navigate("/add")}>Add Design</button>
            <button onClick={() => navigate("/rawMaterial")}>
              Add Raw Material
            </button>
            <button onClick={() => navigate("/customerDetails")}>
              Add Customer
            </button>
            <button>Add Vender</button>
            <button>Dies Master</button>
            <button>Add Colour</button>
          </div>

          <button className="refresh">Refresh</button>

          <div className="reports">
            <h3>Reports</h3>
            <button className="reports">All Reports</button>
          </div>
        </div>
        <div className="middleBox"></div>
        <div className="rightBox">
          <h3>Transaction</h3>
          <div className="transaction">
            <button>Order List</button>
            <button>RM Receipt</button>
            <button>Order Processing</button>
            <button>Production</button>
            <button>Dispatch</button>
            <button>Finish order</button>
            <button>Daily Expenses</button>
            <button>Account</button>
            <button>Stock</button>
          </div>
          <button className="exit">Exit</button>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
