import React, { useState } from "react";
import styled from "styled-components";

const StyledNav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  
  img {
    border-radius: 50%;
  }
  .navbar {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    .mid {
      display: flex;
      gap: 10px;
      h3 {
        font: Fjalla One;
        text-align: center;
      }
    }
  }
`;

const Navbar = ({ mainTitle, secondTitle }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <StyledNav>
      <div className="navbar">
        <div className="datetime">
          <div className="time">{time}</div>
          <div className="date">{new Date().toString().substring(0, 16)}</div>
        </div>

        <div className="mid">
          <div className="trimurti_logo">
            <img src="https://source.unsplash.com/random/100x100" alt="Logo" />
          </div>
          <div className="heading">
            <h2>{mainTitle}</h2>
            <h3>{secondTitle}</h3>
          </div>
        </div>
        <div className="dext_logo">
          <img src="https://source.unsplash.com/random/100x100" alt="Logo" />
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
