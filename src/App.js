import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character';

const StyledCol = styled.div`
  width: 50%;
  margin: 1% auto;
  border: 1px solid SlateGray;
  border-radius: 0.05in;
  background-color: LavenderBlush;
  box-shadow: 4px 3px 5px 0px #EFE6EB;
`;

const StyledH1 = styled.h1`
  width: 50%;
  margin: 1% auto;
  border: 1px solid SlateGray;
  border-radius: 0.05in;
  background-color: #7567C2;
  color: #F2F0E5;
  box-shadow: 2px 2px 5px 0px #B5B0AA;
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
      console.log(res);
      setCharacters(res.data);
    })
    .catch(err => console.log("failed to get character data!"));
  }, []);

  return (
    <div className="App">
      <StyledCol>
        <StyledH1 className="Header">Characters</StyledH1>
        {characters.map(char => <Character char={char} />)}
      </StyledCol>
    </div>
  );
}

export default App;
