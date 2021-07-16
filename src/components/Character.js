import React from 'react';
import styled from 'styled-components'
import space from '../images/space.jpeg'
import '@fortawesome/fontawesome-free/css/all.min.css';

const CharacterDivWrapper = styled.div`
border: 1px solid;
box-shadow: 5px 10px #002c47;
margin-bottom: 20px;
background: white;
width: 500px;
background-image: url(${space});
overflow: hidden;
height: 59px;
&:hover {
  height: 385px;
  
}
`

const CharacterDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

const RowDiv = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`

const CharacterH2 = styled.h2`
font-size:30px;
margin: 10px;
color:white;
font-family: Starjedi;

`
const CharacterP = styled.p`
font-size:20px;
margin: 10px;
color:white;

`
const AttributesP = styled.p`
font-size:20px;
margin: 10px;
color:grey;

`
const Character = (props) => {
    const { character } = props;

//render of each row containing the character info
  return (
    <CharacterDivWrapper>

        <CharacterDiv>
        <RowDiv>
            <i className="fab fa-jedi-order fa-2x" style={{color:'#DDDDDD'}}></i>
            <AttributesP>Name:</AttributesP><CharacterH2>{character.name.toLowerCase()}</CharacterH2>
        </RowDiv>
            <RowDiv><AttributesP>Hair Color:</AttributesP><CharacterP>{character.hair_color}</CharacterP></RowDiv>
            <RowDiv><AttributesP>Birth Year:</AttributesP><CharacterP>{character.birth_year}</CharacterP></RowDiv>
            <RowDiv><AttributesP>Height:</AttributesP><CharacterP>{character.height}</CharacterP></RowDiv>
            <RowDiv><AttributesP>Skin Color:</AttributesP><CharacterP>{character.skin_color}</CharacterP></RowDiv>
            <RowDiv><AttributesP>Mass:</AttributesP><CharacterP>{character.mass}</CharacterP></RowDiv>
            <RowDiv><AttributesP>Films:</AttributesP><CharacterP>{character.films.toString()}</CharacterP></RowDiv>
        </CharacterDiv>
    </CharacterDivWrapper>
  );
}

export default Character;