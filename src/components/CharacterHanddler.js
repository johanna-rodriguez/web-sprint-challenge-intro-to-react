import React, {useState, useEffect} from 'react';
import Character from './Character';
import axios from 'axios';
import styled from 'styled-components'

const CharactersWrapper = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`


const CharacterHanddler = () => {
//this component handdles the multiple characters and send the props to the single render of each character

  const [characterData,setCharacterData]=useState();


  useEffect(() => {
    axios.get('https://swapi.dev/api/people') //call to the api to retrieve the characters data
    .then(res => {
        console.log(res.data)
        setCharacterData(res.data)
    })
    
  },[]);

  if (!characterData) return <h3>Loading...</h3>;

  return (
    <CharactersWrapper>
      {characterData.map(character=><Character character={character}/>)}
    </CharactersWrapper>
  );
}

export default CharacterHanddler;
