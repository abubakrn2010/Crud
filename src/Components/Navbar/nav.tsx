import "./nav.css";
import img1 from "../../assets/iphone-12--product-red 2.png";

export default function Nav() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>BrandName</h2>

        <div className="links">
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>

        <div className="navButtons">
          <a href="#" className="login">Login</a>
          <button className="member">Become a member →</button>

          <div className="mobileIcons">
            <span>⌕</span>
            <span>🛒</span>
            <span>☰</span>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="left">
          <h1>
            Financial <br />
            Assistance <br />
            With True <br />
            Purpose
          </h1>

          <p>
            We know how large objects will act, but things on a small scale.
          </p>

          <div className="buttons">
            <button className="quote">Get Quote Now</button>
            <button className="learn">Learn More</button>
          </div>
        </div>

        <div className="right">
          <div className="circle"></div>
          <div className="smallCircle"></div>
          <img src={img1} alt="Phone" className="phone" />
        </div>
      </section>
    </div>
  );
}