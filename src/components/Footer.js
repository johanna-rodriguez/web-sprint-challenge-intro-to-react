import React from 'react';
import styled from 'styled-components'


const FooterDiv = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content: flex-start;
border: 1px solid;
box-shadow: 5px 10px #888888;
margin-top: 20px;
background: white;
background-image: url('https://img.wallpapersafari.com/desktop/1920/1080/23/18/2tJ4sg.jpg');
`

const FooterH3 = styled.h3`
font-size:30px;
color:#ff0000;

`
const FooterImg = styled.img`
width:200px;
`


const Footer = props => {



  return (
    <FooterDiv >
     <FooterH3>May the Force Be with you!!!</FooterH3>     
    </FooterDiv>
  );
};

export default Footer;