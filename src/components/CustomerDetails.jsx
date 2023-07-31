import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const StyledCustomerDetails = styled.div``;

const CustomerDetails = ({ idnumber }) => {
  return (
    <>
      <Navbar mainTitle={"Customer Details"} />
      <div className="id">ID : {idnumber}</div>
      <div className="mainBox">
        <div className="leftBox">
          <div className="customerName">
            <label htmlFor="customerName">Customer Name :</label>
            <input type="text" name="customerName" id="customerName" />
          </div>
          <div className="email">
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="address">
            <label htmlFor="address">Address</label>
            <input type="text" name="address" id="address" />
          </div>
        </div>
        <div className="rightBox">
          <div className="GSTnumber">
            <label htmlFor="GSTnumber">GST No. :</label>
            <input type="text" name="GSTnumber" id="GSTnumber" />
          </div>
          <div className="companyName">
            <label htmlFor="companyName">Company Name :</label>
            <input type="text" name="companyName" id="companyName" />
          </div>
          <div className="city">
            <label htmlFor="city">City :</label>
            <input type="text" name="city" id="city" />
          </div>
          <div className="buttons">
            <button className="save">Save</button>
            <div className="twoButtons">
              <button className="addNew">Add New</button>
              <button className="close">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
