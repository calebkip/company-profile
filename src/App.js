import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import InfoBoxes from './Components/InfoBoxes'
import InfoSectionOne from './Components/InfoSectionOne'
import {ThemeProvider} from "styled-components"
import { createGlobalStyle } from 'styled-components'
import InfoSectionTwo from './Components/InfoSectionTwo'
import InfoSectionThree from './Components/InfoSectionThree'
import Teams from './Components/Teams'
import InfoSectionFour from './Components/InfoSectionFour'
import Blog from './Components/Blog'
const GlobalStyles =createGlobalStyle`
  body{
    background-color:white;

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,wght@0,100;0,300;1,100&display=swap');
  *{
    font-family:"Roboto",sans-serif;
  }


  }
`;
const theme={
  colors:{
    primary:'darkblue',
    secondary:'#A0E7E5',
    light:'#C4DBE0',
    dark:'#0C6980',
    text:'grey',
    texttitle:'tomato',
    bgdefault:'white',
    bgdull:'#68BBE3',
    bglight:'aliceblue',

  }
}
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Navbar/>
      <Hero/>
      <InfoBoxes/>
      <InfoSectionOne/>
      <InfoSectionTwo/>
      <InfoSectionThree/>
      <InfoSectionFour/>
      <Teams/>
      <Blog/>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
