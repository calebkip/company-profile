import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
width:100%;
height:10%;
background-color:aliceblue;
display:flex;
justify-content:space-around;
align-items:centre;

`
const Left =styled.div`
display:flex;
flex:1;`

const Right =styled.div`
display:flex;
align-items:centre;
flex:1;
height:10%;
align-items:center;
padding-top: 10px;;
`
const Centre =styled.div`
display:flex;
flex:2;`
const Logo=styled.h1`
font-size:20px;
text-decoration:underline;
cursor:pointer;
color:dark-blue;
`
const Menu=styled.ul`
  display:flex;
  justify-content:space-evenly;
  align-items:centre; 
`
const MenuItem=styled.li`
  list-style:none;
  font-size:20px;
  font-weight:bold;
  color:grey;
  cursor:pointer;
  margin-left:30px;
  &:hover{
   opacity:80%; 
  }
`
const ButtonContainer=styled.div`
  display:flex;
`
const Button=styled.button`
font-weight:bold;
color:white;
background-color:darkblue;
margin-left:5px;
padding:5px 10px;
cursor:pointer;
border:2px solid darkblue;
border-radius:10px;
background:linear-gradient( to right,${(props)=>props.theme.colors.bglight} 50%,black 50%);
background-size:200% 100%;
margin-left:10px;
background-position:right bottom;
transition:all 1s ease-out;
&:hover{
  color:${(props)=>props.theme.colors.primary};
  border:2px solid blue;
  background-position: left bottom;
  cursor:pointer;
}
  
`



const Navbar = () => {
  return (
    
    <Container>
    <Left><Logo>ROAMINGTECH</Logo></Left>
    <Centre>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>Home</MenuItem>
        <MenuItem>Home</MenuItem>
      </Menu>
    </Centre>
     <Right>

<Button>
        Sign Up
      </Button>

     
     </Right>
     </Container>
     
  )
}

export default Navbar