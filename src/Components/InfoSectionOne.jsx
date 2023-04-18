import React from 'react'
import styled from 'styled-components'
import sectionimage from  '../images/section1.png'
const Container=styled.div`
  padding:20px 20px;
  
`
const Wrapper=styled.div`
  display:flex;
  justify-content:center;
  flex-direction:row;
  margin:0px 100px 0px 100px;
  
`
const Header=styled.div`
  font-weight:bold;
  font-size:30px;
  color:${(props)=>props.theme.colors.primary};
`
const Subtitle=styled.div`
   color:${(props)=>props.theme.colors.texttitle};
   font-weight:bold;
   margin-bottom: 10px;
  

`
const Description=styled.p`
  color:${(props)=>props.theme.colors.text};
`
const Image=styled.img`
  width:100%;
  padding-top: 30px;
  
  /* background-color:#DEF0FF; */
`
const Right=styled.div`
  width:40%;
  padding-left:0px;
`
const Left=styled.div`
  width:60%;
  padding-left: 20px;
`
const List=styled.div`
  list-style:none;
  display:flex;
  width:100%;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
`
const ListItem=styled.li`
  color:${(props)=>props.theme.colors.text};
  border:2px solid white;
  border-left:5px solid;
  min-width:200px;
  text-align:left;
  margin:10px;
  padding:20px 20px;
  -webkit-box-shadow: 5px 5px 15px 5px #DEF0FF; 
box-shadow: 5px 5px 15px 5px #DEF0FF;
`
const InfoSectionOne = () => {
  return (
    <Container>
    <Wrapper>
    <Right>
    
    <Image src={sectionimage}/>
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

export default InfoSectionOne