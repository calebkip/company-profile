import styled from 'styled-components'
import React from 'react'
import SectionImage from "../images/laptopDark.jpg"
const Container=styled.div`
margin-top:10%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
background-image:url(${SectionImage});

background-size:cover;
background-repeat:no-repeat;
height:350px;
flex-direction:column;
background-attachment:fixed;
`
const Title=styled.div`
    color:white;
    font-size:30px;
    font-weight:bold;
`
const Description =styled.p`
    color: white;
    width:40%;
    font-weight:lighter;
    font-size:25px;
`

const InfoSectionTwo = () => {
  return (
    
    <Container>
     <Title>
        Title
     </Title>
     <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore dicta doloribus voluptatibus itaque nisi? Voluptas, 
        
     </Description>
     <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Inventore dicta doloribus voluptatibus itaque nisi? Voluptas, 
        
     </Description>
    </Container>
  )
}

export default InfoSectionTwo