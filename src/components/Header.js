import React from 'react';
import styled from 'styled-components'
import template from '../images/swlogo-silver.png'

const HeaderDiv = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: flex-start;
border: 1px solid;
box-shadow: 0px 10px #004063;
margin-bottom: 20px;
background: black;
background-image: url('https://img.wallpapersafari.com/desktop/1920/1080/23/18/2tJ4sg.jpg');
`
const HeaderH1 = styled.h1`
font-size:50px;
color:#ffc401;
font-family: "Starjout";
`
const HeaderImg = styled.img`
width:200px;
margin: 20px;
`
const HeaderH3 = styled.h3`
margin-right:20px;
color:white;
`

const TitleWrapper = styled.div`
display: flex;
flex-direction: column;
margin:auto;
`
const Header = props => {

  return (

    <HeaderDiv>
       <HeaderImg
          alt='header logo'
          src={template}
        />
        <TitleWrapper>
            <HeaderH1>Chewbacca's Roar Blog</HeaderH1>
            <HeaderH3>A long time ago in a galaxy far, far away....</HeaderH3>
        </TitleWrapper>
        <HeaderImg
          alt='header logo'
          src={template}
        />
    </HeaderDiv>


  );
};

export default Header;