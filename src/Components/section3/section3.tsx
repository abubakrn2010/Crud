import "./section3.css";
import img1 from "../../assets/icn svg-icn icn-lg.png";
import img2 from "../../assets/icn svg-icn icn-lg (1).png";


function Section3() {
  return (
     <div className="container">
      <div className="header">
        <h1 className="title">Download Our App</h1>

        <p className="subtitle">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="buttons">
        <div className="btn">
          <img src="https://cdn.simpleicons.org/apple/ffffff" alt="" />
          <div>
            <p>Download on</p>
            <h3>App Store</h3>
          </div>
        </div>

        <div className="btn">
          <img src="https://cdn.simpleicons.org/googleplay/ffffff" alt="" />
          <div>
            <p>Download on</p>
            <h3>Google Play</h3>
          </div>
        </div>

        <div className="btn">
          <img src={img1} alt="" />
          <div>
            <p>Download on</p>
            <h3>Amazon.com</h3>
          </div>
        </div>

        <div className="btn">
          <img src={img2} alt="" />
          <div>
            <p>Download on</p>
            <h3>Windows Store</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
