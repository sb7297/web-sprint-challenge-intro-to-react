import React from 'react';

const Character = ({ char }) => {
    return (
    <div class="character">
        <ul>
            <li>{char.name}</li>
            <li>{char.gender}</li>
            <li>{char.birth_year}</li>
        </ul>
    </div>
    );
}

export default Character;