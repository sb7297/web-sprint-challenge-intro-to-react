import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 70%;
    margin: 2% auto;
    border: 1px solid SlateGray;
    border-radius: 0.05in;
    box-shadow: 2px 2px 3px 0px #000000;
    background-color: #F7F4F4;
    color: #7E4D93;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftCharDiv = styled.div`
    font-size: 1.2rem;
    padding: 1%;
`;

const RightCharDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
`;

const Character = ({ char }) => {
    return (
    <StyledDiv>
        <LeftCharDiv>{char.name}</LeftCharDiv>
        <RightCharDiv>
            <div>{char.gender}</div>
            <div>{char.birth_year}</div>
        </RightCharDiv>
    </StyledDiv>
    );
}

export default Character;