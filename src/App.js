import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character';

const StyledCol = styled.div`
  width: 40%;
  margin: auto;
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
        <h1 className="Header">Characters</h1>
        {characters.map(char => <Character char={char} />)}
      </StyledCol>
    </div>
  );
}

export default App;
