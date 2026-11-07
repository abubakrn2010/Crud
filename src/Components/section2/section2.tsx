import "./section2.css";
import img2 from "../../assets/circle-box.png"


function Section2() {
  return (
      <div className="container">
      <div className="header">
        <h1 className="title">What Clients Say</h1>

        <p className="subtitle">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="card">
        <img src={img2} alt="" className="avatar" />

        <p className="text">
          Slate helps you see how many more days you need to work to reach
          your financial goal for the month and year.
        </p>

        <div className="stars">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="empty">☆</span>
        </div>

        <h3 className="name">Regina Miles</h3>
        <p className="job">Designer</p>
      </div>
    </div>
  )
}

export default Section2
