import React, { useState } from "react";
import styled from "styled-components";

const LoginDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .box {
    width: 80vw;
    height: 80vh;
    /* border: 1px solid gray; */
    border-radius: 5px;
    box-shadow: 2px 3px 5px 5px rgba(0, 0, 0, 0.1);
  }

  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px;
  }

  .content {
    flex: 1;
    display: flex;
    width: 100%;
    gap: 20px;
    .left {
      flex: 0.5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 300px;
        height: 300px;
      }
    }
    .right {
      flex: 0.5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      padding: 30px;
      input,
      select {
        border: 1px solid gray;
        outline: none;
        background: "#d0d0d0";
        padding: 20px;
        max-width: 300px;
        height: 20px;
        border-radius: 2px;
      }
      .buttons {
        width: 300px;
        display: flex;
        gap: 10px;
        button {
          width: 140px;
          border: none;
          outline: none;
          padding: 10px;
          border-radius: 4px;
        }
        .login {
          background-color: green;
          color: white;
        }
      }
    }
  }
`;

const Login = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const employee = ["abcd", "abcd", "abcd", "abcd", "abcd", "abcd"];
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <LoginDiv>
      <div className="box">
        <div className="navbar">
          <div className="datetime">
            <div className="time">{time}</div>
            <div className="date">{new Date().toString().substring(0, 16)}</div>
          </div>

          <div className="logo">
            <img src="https://source.unsplash.com/random/100x100" alt="Logo" />
          </div>
        </div>
        <div className="content">
          <div className="left">
            <img src="https://source.unsplash.com/random/300x300" alt="Logo" />
          </div>
          <div className="right">
            <h1>Login</h1>

            <label htmlFor="employee">Select Employee</label>
            <select name="" id="employee">
              {employee.map((el, idx) => (
                <option value={el} key={idx}>
                  {el}
                </option>
              ))}
            </select>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <div className="buttons">
              <button className="login">Login</button>
              <button className="forgot">Forgot Password</button>
            </div>
          </div>
        </div>
      </div>
    </LoginDiv>
  );
};

export default Login;
