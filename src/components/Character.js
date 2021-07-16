import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 70%;
    margin: 2% auto;
    border: 1px solid SlateGray;
    border-radius: 0.05in;
`;

const Character = ({ char }) => {
    return (
    <StyledDiv>
        <div>{char.name}</div>
        <div>{char.gender}</div>
        <div>{char.birth_year}</div>
    </StyledDiv>
    );
}

export default Character;