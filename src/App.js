import React from 'react';
import styled  from 'styled-components';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const AppDiv = styled.div`
`

function App() {
  return (
    <AppDiv>
      {/* <Login/> */}
      <Dashboard/>
    </AppDiv>
  );
}

export default App;
