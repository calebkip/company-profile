import React from 'react'
import styled from 'styled-components'
import Textbanner from './Textbanner'
import {CardTitle,Card,CardContent,Description,Button} from './cards'
const Container=styled.div`
display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap; `
    

const InfoBoxes = () => {
  return (
<div>
    <Textbanner title={"What We Offer"} subtitle={"Our Services"}/>
    <Container>
        <Card>
            <CardContent  padding={"10px"} >
                <CardTitle>WEB DEVELOPMENT</CardTitle>
                <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Dolorem eaque sed alias,
                     mollitia fugiat reiciendis consequuntur libero deleniti maxime totam 
                     eligendi exercitationem perspiciatis necessitatibus aperiam ex ipsum. Est, qui dolor!</Description>
                <Button>Read More</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <CardTitle>SERVICE AND MAINATANCE</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet.</Description>
                <Button>Read More</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <CardTitle>tITLE</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet.</Description>
                <Button>Read More</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <CardTitle>tITLE</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet.</Description>
                <Button>Read More</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <CardTitle>tITLE</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet.</Description>
                <Button>Read More</Button>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <CardTitle>tITLE</CardTitle>
                <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet.</Description>
                <Button>Read More</Button>
            </CardContent>
        </Card>
    </Container>
</div>
  )
}

export default InfoBoxes