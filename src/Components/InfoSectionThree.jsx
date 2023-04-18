import React from 'react'
import section3image from  '../images/section3.png'
import {Container,Wrapper,Right,Image,Left,Subtitle,Header,Description,List,ListItem, } from "./Section.styled"
const InfoSectionThree = () => {
  return (
    <Container>
    <Wrapper>
    <Right>
    
    <Image src={section3image}/>
    </Right>
    <Left>
    <Subtitle>Subtitle</Subtitle>
    <Header>WHat Our Clients Say About US</Header>
    <Description>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
     Porro facere nihil nesciunt molestias, 
    exercitationem a vero architecto obcaecati, 
    quidem, corrupti natus tempora aperiam quos.
    </Description>
    <List>
      <ListItem>Data Analysis</ListItem>
      <ListItem>Web Programming</ListItem>
      <ListItem>Web Security</ListItem>
      <ListItem>API Testing and Security</ListItem>
      <ListItem>Cloud Security</ListItem>
      <ListItem>Cloud Services</ListItem>
    </List>
    </Left>
    
    </Wrapper>
    {/* <SectiononeImage /> */}
   
    
    </Container>
  )
}

export default InfoSectionThree