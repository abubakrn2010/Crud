import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from '../src/Components/Navbar/nav.tsx'
import Section1 from  '../src/Components/section1/section1.tsx'
import Section2 from "../src/Components/section2/section2.tsx";
import Section3 from "../src/Components/section3/section3.tsx";
import Section4 from "../src/Components/section4/section4.tsx";
import Section5 from "../src/Components/section5/section5.tsx";
import Section6 from "../src/Components/section6/section6.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <br /><br /><br /><br /><br />
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
  </StrictMode>,
)