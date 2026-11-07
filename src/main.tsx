import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nav from '../src/Components/Navbar/nav.tsx'
import Section1 from  '../src/Components/section1/section1.tsx'
import Section2 from "../src/Components/section2/section2.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav />
    <br /><br /><br /><br /><br />
    <Section1/>
    <Section2/>
  </StrictMode>,
)