import React from 'react'
import styled from 'styled-components'
import SectionImage4 from "../images/bg2.jpg"

const Container=styled.div`
margin-top:10%;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
background-image:url(${SectionImage4});

background-size:cover;
background-repeat:no-repeat;
height:350px;
flex-direction:column;
background-attachment:fixed;
`
// const Title=styled.div`
//     color:white;
//     font-size:30px;
//     font-weight:bold;
// `
// const Description =styled.p`
//     color: white;
//     width:40%;
//     font-weight:lighter;
//     font-size:25px;
// `
const Card=styled.div`
    width:250px;
    height:200px;
`
const CardContent=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`
const Number=styled.div`
    font-weight:bold;
    font-size:50px;
    color:${(props)=>props.theme.colors.bgdefault};

`
const Subtitle=styled.div`
    font-weight: bold;
    font-size: 20px;
    color:white;
`

const InfoSectionFour = () => {
  return (<>
   
   <Container SectionImage4=''>
     
    <Card>
        <CardContent>
            <Number>1000+</Number>
            <Subtitle>Subscribers</Subtitle>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <Number>1000+</Number>
            <Subtitle>Subscribers</Subtitle>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <Number>1000+</Number>
            <Subtitle>Subscribers</Subtitle>
        </CardContent>
    </Card>
    <Card>
        <CardContent>
            <Number>1000+</Number>
            <Subtitle>Subscribers</Subtitle>
        </CardContent>
    </Card>

   </Container>
   </>
  )
}

export default InfoSectionFour