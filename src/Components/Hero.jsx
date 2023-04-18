import React from 'react'
import styled from 'styled-components'
import hero from '../images/hero.png'

const Container=styled.div`
display:flex;
height:90%;

`
const Left=styled.div`
    
    width:60%;
    background-color:	#A0E7E5;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Right=styled.div`
 height:10%;
 width:60%;
 background-color:#A0E7E5; 
 display:flex;
 align-items:center;

`
const Title=styled.div`
  width:60%;
  font-size:38px;
  font-weight:bold;
  color:darkblue;
  text-align:center;

`
const Description=styled.p`
  font-size:20px;
  color:grey;
  width:70%;

`
const Image=styled.img`
  width:500px;
`
const ButtonContainer=styled.div`
  display:flex;
`
const Button=styled.button`
font-weight:bold;
color:white;
background-color:darkblue;
margin-left:5px;
padding:10px 20px;
cursor:pointer;
border:2px solid darkblue;
border-radius:10px;
background:linear-gradient( to right,aliceblue 50%,darkblue 50%);
background-size:200% 100%;
margin-left:10px;
background-position:right bottom;
transition:all 1s ease-out;
&:hover{
  color:darkblue;
  border:2px solid blue;
  background-position: left bottom;
  cursor:pointer;
}
  
`
const Hero = () => {
  return (
    <Container>

        <Left>
<Title> ROAMINGTECH TECHNOLOGIES <br></br>For your best service</Title>
<Description>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
  Ipsum veniam animi suscipit corrupti, voluptatum, 
  sit optio error tempore necessitatibus iste perspiciatis reprehenderit sed cupiditate accusamus, quasi magni omnis totam eveniet explicabo. 
  Fuga id a quam exercitationem.
  Labore tempore recusandae magnam tenetur quaerat vel iste rem doloremque neque, cum optio nemo?
</Description>

<ButtonContainer>
  <Button> About Us</Button>
  <Button>Contact Us</Button>
</ButtonContainer>
        </Left>
        <Right>
          <Image src={hero}/>
        </Right>
    </Container>
  )
}

export default Hero