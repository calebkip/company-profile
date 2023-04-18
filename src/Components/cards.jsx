import React from 'react'
import styled from 'styled-components'


export const Card=styled.div`
    width:300px;
    margin: 10px 10px; 
    /* -webkit-box-shadow: -5px 0px 20px 4px rgba(164,235,226,1);
-moz-box-shadow: -5px 0px 20px 4px rgba(164,235,226,1);
box-shadow: -5px 0px 20px 4px rgba(164,235,226,1); */

background:linear-gradient( to right,#68BBE3 50%,aliceblue 50%);
background-size:200% 100%;
margin-left:10px;
background-position:right bottom;
min-width:350px;
transition:all 1s ease-out;
&:hover{
  color:darkblue;
  border:2px solid blue;
  background-position: left bottom;
  cursor:pointer;
}

`
export const CardContent=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:${({padding})=>padding};
    flex-direction: column;
   
`
export const CardTitle=styled.div`
    color:darkblue;
`
export const Description=styled.div`
color:gray;
font-size:15px;
    
`
export const Button=styled.a`
    color:red;
    font-weight: bold;
`
export const CardImage=styled.img`
   height:100%;
   width:100%;
   object-fit:cover; 
`
