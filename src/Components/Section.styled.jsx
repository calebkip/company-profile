import React from 'react'
import styled from 'styled-components'
import sectionimage from  '../images/section1.png'
export const Container=styled.div`
  padding:20px 20px;
  
`
export const Wrapper=styled.div`
  display:flex;
  justify-content:center;
  flex-direction:row-reverse;
  margin:0px 100px 0px 100px;
  
`
export const Header=styled.div`
  font-weight:bold;
  font-size:30px;
  color:${(props)=>props.theme.colors.primary};
`
export const Subtitle=styled.div`
   color:${(props)=>props.theme.colors.texttitle};
   font-weight:bold;
   margin-bottom: 10px;
  

`
export const Description=styled.p`
  color:${(props)=>props.theme.colors.text};
`
export const Image=styled.img`
  width:100%;
  padding-top: 30px;
  
  /* background-color:#DEF0FF; */
`
export const Right=styled.div`
  width:40%;
  padding-left:0px;
`
export const Left=styled.div`
  width:60%;
  padding-left: 20px;
`
export const List=styled.div`
  list-style:none;
  display:flex;
  width:100%;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
`
export const ListItem=styled.li`
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