import "./section4.css";



function Section4() {
  return (
      <div className="pricing">
      <div className="pricingHead">
        <h1>Pricing</h1>

        <p>
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="pricingList">

        <div className="pricingItem">
          <div className="pricingInfo">
            <h2>FREE</h2>

            <p>
              Most calendars are designed for teams. Slate is designed
              for freelancers who want a simple way
            </p>
          </div>

          <div className="pricingBuy">
            <div className="pricingCost">
              <h1>0</h1>

              <div>
                <h3>$</h3>
                <p>Per Month</p>
              </div>
            </div>

            <button>Try for free</button>
          </div>
        </div>

        <div className="pricingItem">
          <div className="pricingInfo">
            <h2>STANDARD</h2>

            <p>
              Most calendars are designed for teams. Slate is designed
              for freelancers who want a simple way
            </p>
          </div>

          <div className="pricingBuy">
            <div className="pricingCost">
              <h1>19</h1>

              <div>
                <h3>$</h3>
                <p>Per Month</p>
              </div>
            </div>

            <button>Try for free</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section4

