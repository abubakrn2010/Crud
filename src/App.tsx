import './App.css'
import logo from './assets/Logo (4).png'
import logo1 from './assets/Logo (6).png'
import img1 from "./assets/Img.png";
import img2 from "./assets/Img (2).png";
import img3 from "./assets/Icon (4).png";
import img4 from "./assets/Icon (5).png";
import img5 from "./assets/Icon (6).png";
import img6 from "./assets/Aspas.png";
import img7 from "./assets/Img (6).png";
import img8 from "./assets/Img (7).png";
import img9 from "./assets/Dots (1).png";
import img10 from "./assets/whatsapp 1.png";
import img11 from "./assets/image copy.png";
import img12 from "./assets/image copy 2.png";
import img13 from "./assets/image.png";
import img14 from "./assets/image copy 3.png";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <img src={logo} alt="logo" />
        <div className="links">
          <p>Início</p>
          <p>Sobre</p>
          <p>Serviços</p>
          <p>Depoimentos</p>
          <p>Contato</p>
        </div>
        <p className="menu">☰</p>
      </div>

      <div className="head">
        <div className="hero">
          <div className="ht">
            <h1>Saúde natural para <br /> os seus cabelos</h1>
            <p>Um salão exclusivo em São Paulo, <br /> especializado em tratamentos naturais.</p>
            <button className="hb">Agendar um horário</button>
          </div>
          <div className="hi">
            <img src={img1} alt="salon" />
            <div className="hbg"></div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="ai">
          <div className="abg"></div>
          <img src={img2} alt="about" />
        </div>
        <div className="at">
          <h1>Sobre nós</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis arcu quis nisi luctus, id accumsan felis tristique. Proin quis bibendum diam. Sed consequat nisl laoreet eros ultricies pellentesque. Nullam in est porta, pellentesque massa vitae, vehicula risus. <br /><br />
            In placerat, felis vitae sodales dictum, lacus quam pretium mi, ut pretium urna turpis eu dui. Vestibulum id ullamcorper nibh. Donec luctus, nunc finibus elementum suscipit, tortor augue vulputate sapien, vitae feugiat enim augue sed. <br /><br />
            Quisque id aliquam elit. Suspendisse congue pharetra maximus. Duis rutrum velit a leo euismod dictum. Sed sodales est efficitur arcu tincidunt tincidunt. Curabitur fringilla, risus at feugiat feugiat, nisl nulla tincidunt tellus, elementum elementum lorem nisl eleifend dolor. Nullam eget dui at sem ullamcorper luctus.
          </p>
        </div>
      </div>

      <div className="services">
        <div className="sc">
          <div className="st">
            <h1>Serviços</h1>
            <p>
              Com mais de 10 anos no mercado, o <span>Beautysalon</span> já <br />
              conquistou clientes de inúmeros países com seus tratamentos <br />
              exclusivos e totalmente naturais
            </p>
          </div>

          <div className="sl">
            <div className="service">
              <img src={img3} alt="icon" />
              <h1>Terapia capilar</h1>
              <p>Terapia completa para couro <br /> cabeludo e fios, protegendo todos <br /> os tipos de cabelos, inclusive os <br /> longos e finos.</p>
            </div>

            <div className="service">
              <img src={img4} alt="icon" />
              <h1>Cortes</h1>
              <p>A nossa equipe é repleta de <br /> profissionais renomados, famosos <br /> por lançarem tendências com <br /> cortes diferenciados e clássicos.</p>
            </div>

            <div className="service">
              <img src={img5} alt="icon" />
              <h1>Tratamentos</h1>
              <p>O beautysalon conta com <br /> diversos tratamentos naturais e <br /> totalmente veganos, para <br /> qualquer tipo de cabelo.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews">
        <div className="rt">
          <h1>Depoimentos de quem já passou por aqui</h1>
        </div>

        <div className="rl">
          <div className="review">
            <div className="rtext">
              <span><img src={img6} alt="quotes" /></span>
              <span>
                Eu sou cliente do Beautysalon há 5 anos e não troco <br />
                por nada! Certamente meu cabelo mudou muito depois <br />
                que comecei a tratar somente com produtos naturais e <br />
                veganos. São profissionais incríveis e qualificados.
              </span>
              <div className="author">
                <span><img src={img7} alt="Wanessa" /></span>
                <span className="name">Wanessa Souza</span>
              </div>
            </div>
          </div>

          <div className="second">
            <div className="review">
              <div className="rtext">
                <span><img src={img6} alt="quotes" /></span>
                <span>
                  Minha mãe frequenta o salão há anos e me levou um dia <br />
                  para conhecer. Minha experiência foi incrível, eu continuo <br />
                  fazendo o a terapia capilar e isso salvou o meu cabelo. <br />
                  Adoro todos os profissionais do Beautysalon.
                </span>
                <div className="author">
                  <span><img src={img8} alt="Luna" /></span>
                  <span className="name">Luna Falcão</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dots">
          <img src={img9} alt="dots" />
        </div>
      </div>

      <div className="contact">
        <div className="cc">
          <div className="ct">
            <h1>Entre em contato com a gente!</h1>
            <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
            <button className="cb">
              <img src={img10} alt="whatsapp" />
              Entrar em contato
            </button>
          </div>

          <div className="ci">
            <div className="item">
              <img src={img13} alt="phone" />
              <p>11 99845-6754</p>
            </div>
            <div className="item">
              <img src={img11} alt="location" />
              <p>R. Amauri Souza, 346</p>
            </div>
            <div className="item">
              <img src={img12} alt="email" />
              <p>contato@beautysalon.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="fc">
          <div className="ft">
            <img src={logo1} alt="logo" />
            <p>©2021 Beautysalon.</p>
            <p>Todos os direitos reservados.</p>
          </div>
          <div className="fs">
            <img src={img14} alt="social media" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar