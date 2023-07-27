import React from "react";
import styled from "styled-components";
const StyledBom = styled.div``;

const Bom = () => {
  return (
    <StyledBom>
      <div className="leftBox">
        <button>Save</button>
      </div>
      <div className="middleBox"></div>
      <div className="rightBox"></div>
    </StyledBom>
  );
};

export default Bom;
