import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Bom from "./components/Bom";
import AddDesign from "./components/addDesign";
import RawMaterial from "./components/RawMaterial";
import CustomerDetails from "./components/CustomerDetails";
import { Routes, Route, useNavigate } from "react-router-dom";
import Select from "./components/Select";

const AppDiv = styled.div``;

function App() {
  const navigate = useNavigate();
  return (
    <AppDiv>
      <Routes>
        <Route path="/add" element={<AddDesign />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bom" element={<Bom />} />
        <Route path="/rawMaterial" element={<RawMaterial />} />
        <Route path="/customerDetails" element={<CustomerDetails />} />
        <Route path="/select" element={<Select />} />
      </Routes>
    </AppDiv>
  );
}

export default App;
