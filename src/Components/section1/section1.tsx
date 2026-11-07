import "./section1.css";
import Card from "../section1/section1cart";
import img1 from "../../assets/icn resize .icn-xl.png"


function Section1() {
  return (
    <div className="container">
  <div className="header">
    <h1 className="title">
      Better Strategy With <br />
      Quality Business
    </h1>

    <p className="subtitle">
      Problems trying to resolve the conflict between <br />
      the two major realms of Classical physics: Newtonian mechanics
    </p>
  </div>
  <br /><br /><br />

  <div className="cards">
  <Card tittl={img1} name="Investment Trading" des="the quick fox jumps over the lazy dog" />
  <Card tittl={img1} name="Support On Raising Funds" des="the quick fox jumps over the lazy dog" />
  <Card tittl={img1} name="Financial Analysis" des="the quick fox jumps over the lazy dog" />
  <Card tittl={img1} name="Taxation Planning" des="the quick fox jumps over the lazy dog" />
  <Card tittl={img1} name="Save money and time" des="the quick fox jumps over the lazy dog" />
  <Card tittl={img1} name="Outsourced Consulting Business" des="the quick fox jumps over the lazy dog" />
</div>

</div>
  )
}

export default Section1

