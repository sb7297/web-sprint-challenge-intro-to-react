import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character';

const StyledCol = styled.div`
  width: 50%;
  margin: 1% auto;
  padding: 1% 0;
  border-radius: 0.05in;
  background-color: #7E4D93;
  box-shadow: 2px 2px 35px 0px #B5B0AA;
`;

const StyledH1 = styled.h1`
  width: 50%;
  margin: 1% auto;
  padding: 0.5% 0;
  border-radius: 0.05in;
  box-shadow: 2px 2px 3px 0px #000000;
  background-color: #F7F4F4;
  color: #7E4D93;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then(res => {
      setCharacters(res.data);
    })
    .catch(err => console.log("failed to get character data!"));
  }, []);

  return (
    <div className="App">
      <StyledCol>
        <StyledH1>Characters</StyledH1>
        {characters.map(char => <Character char={char} />)}
      </StyledCol>
    </div>
  );
}

export default App;
