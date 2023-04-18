import React from 'react'
import styled from 'styled-components'
import {CardTitle,Card,CardContent,Description,Button,CardImage} from './cards'
import Card1 from "../images/card1.jpg"
import Card2 from "../images/card2.jpg"
import Card3 from "../images/card3.png"
// import Card4 from "../images/card4.jpg"

const Container=styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
`
const Blog = () => {
  return (
    <Container>
<Card>
    <CardContent>
        <CardImage src={Card1}/>
        <CardTitle>Title</CardTitle>
        <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Debitis, deserunt. Voluptatibus eos doloremque hic itaque,
              quae rerum pariatur nesciunt odit, 
              fuga asperiores quis saepe earum voluptate magni nulla numquam corporis eaque omnis?
               Velit iste, libero cumque excepturi incidunt architecto, 
            quo repellendus hic magnam impedit quos asperiores! Commodi ab cupiditate omnis.
        </Description>
        <Button>Read More ..</Button>
    </CardContent>
</Card>
<Card>
    <CardContent>
    <CardImage src={Card1}/>
        <CardTitle>Title</CardTitle>
        <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Debitis, deserunt. Voluptatibus eos doloremque hic itaque,
              quae rerum pariatur nesciunt odit, 
              fuga asperiores quis saepe earum voluptate magni nulla numquam corporis eaque omnis?
               Velit iste, libero cumque excepturi incidunt architecto, 
            quo repellendus hic magnam impedit quos asperiores! Commodi ab cupiditate omnis.
        </Description>
        <Button>Read More ..</Button>
    </CardContent>
</Card>
<Card>
    <CardContent>
    <CardImage src={Card1}/>
        <CardTitle>Title</CardTitle>
        <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Debitis, deserunt. Voluptatibus eos doloremque hic itaque,
              quae rerum pariatur nesciunt odit, 
              fuga asperiores quis saepe earum voluptate magni nulla numquam corporis eaque omnis?
               Velit iste, libero cumque excepturi incidunt architecto, 
            quo repellendus hic magnam impedit quos asperiores! Commodi ab cupiditate omnis.
        </Description>
        <Button>Read More ..</Button>
    </CardContent>
</Card>
<Card>
    <CardContent>
    <CardImage src={Card1}/>
        <CardTitle>Title</CardTitle>
        <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Debitis, deserunt. Voluptatibus eos doloremque hic itaque,
              quae rerum pariatur nesciunt odit, 
              fuga asperiores quis saepe earum voluptate magni nulla numquam corporis eaque omnis?
               Velit iste, libero cumque excepturi incidunt architecto, 
            quo repellendus hic magnam impedit quos asperiores! Commodi ab cupiditate omnis.
        </Description>
        <Button>Read More ..</Button>
    </CardContent>
</Card>

    </Container>
  )
}

export default Blog