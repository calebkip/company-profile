import React from 'react'
import styled from 'styled-components'
import  staf1 from "../images/staff1.jpg"
import  staf2 from "../images/staff2.jpg"
import  staf3 from "../images/staff3.jpg"
import  staf4 from "../images/staff4.jpg"

const Container=styled.div`
    padding:5%;
`
const Wrapper=styled.div`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
`
const TeamCard=styled.div`
    height:350px;
    width:280px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    align-items: center;
    margin:1%;
    -webkit-box-shadow: 5px 5px 15px 5px #DEF0FF; 
box-shadow: 5px 5px 15px 5px #DEF0FF;

`
const CardImage=styled.img`
    height:100%;
    width:100%;
    object-fit: cover;
    border-radius: 10%;
    &:hover{
       cursor: pointer; 
       opacity:65%;
    }

`
const TextWrapper=styled.div`
    display:flex;
    flex-direction:column;
`
const MemberName=styled.div`
    color:${(props)=>props.theme.colors.text};
`
const  TeamPosition=styled.div`
    color:${(props)=>props.theme.colors.text};
`
const Teams = () => {
  return (
    <Container>
        <Wrapper>
    <TeamCard>
        <CardImage  src={staf1}/>
        <TextWrapper>
            <MemberName>name</MemberName>
            <TeamPosition>Position</TeamPosition>

        </TextWrapper>
    </TeamCard>
    <TeamCard>
        <CardImage  src={staf2}/>
        <TextWrapper>
            <MemberName>name</MemberName>
            <TeamPosition>Position</TeamPosition>

        </TextWrapper>
    </TeamCard>
    <TeamCard>
        <CardImage  src={staf3}/>
        <TextWrapper>
            <MemberName>name</MemberName>
            <TeamPosition>Position</TeamPosition>

        </TextWrapper>
    </TeamCard>
    <TeamCard>
        <CardImage  src={staf4}/>
        <TextWrapper>
            <MemberName>name</MemberName>
            <TeamPosition>Position</TeamPosition>

        </TextWrapper>
    </TeamCard>
    </Wrapper>
    </Container>
  )
}

export default Teams