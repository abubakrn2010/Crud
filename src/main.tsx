import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "../src/Components/Header/header";
import App2 from "../src/Components/Section1/section1";
import App3 from "../src/Components/Section2/section2";
import App4 from "../src/Components/Section3/section3";
import App5 from "../src/Components/footer/footer";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <App/>
  <App2/>
  <App3/>
  <App4/>
  <App5/>
  </StrictMode>,
)