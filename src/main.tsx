import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
 import App from "../src/Conponents/Header/header";
 import Cards from "../src/Conponents/section2/crud";
 import Section2 from "../src/Conponents/section3/section3";
 import Footer from "../src/Conponents/Footer/fototer";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <App/>
  <Cards/> 
  <Section2/>
  <Footer/>
  </StrictMode>,
)