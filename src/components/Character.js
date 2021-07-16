import React, { useState } from 'react';
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
    cursor: pointer;
    font-size: 1.2rem;
    padding: 1%;
`;

const RightCharDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1%;
`;

const ExpandedStyledDiv = styled(StyledDiv)`
    flex-direction: column;
`;

const ExpandedNameDiv = styled.div`
    cursor: pointer;
    font-size: 1.4rem;
    margin: 1%;
`;

const ExpandedRow = styled.div`
    width: 80%;
    margin-bottom: 1.5%;
    display: flex;
    justify-content: space-between;
`;

const Character = ({ char }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    if (!expanded) {
        return (
        <StyledDiv>
            <LeftCharDiv onClick={toggleExpanded}>{char.name}</LeftCharDiv>
            <RightCharDiv>
                <div>{char.gender}</div>
                <div>{char.birth_year}</div>
            </RightCharDiv>
        </StyledDiv>
        );
    }
    return (
        <ExpandedStyledDiv>
            <ExpandedNameDiv onClick={toggleExpanded}>{char.name}</ExpandedNameDiv>
            <ExpandedRow>
                <div>Gender</div>
                <div>{char.gender}</div>
            </ExpandedRow>
            <ExpandedRow>
                <div>Birth year</div>
                <div>{char.birth_year}</div>
            </ExpandedRow>
            <ExpandedRow>
                <div>Height</div>
                <div>{char.height} cm</div>
            </ExpandedRow>
            <ExpandedRow>
                <div>Mass</div>
                <div>{char.mass}</div>
            </ExpandedRow>
            <ExpandedRow>
                <div>Eye color</div>
                <div>{char.eye_color}</div>
            </ExpandedRow>
        </ExpandedStyledDiv>
    );
}

export default Character;