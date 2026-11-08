import "./section5.css";



function Section5() {
  return (

      <div className="branches">

      <div className="branch">
        <div className="branchText">
          <h1>We Have Branches All Over The World</h1>

          <p>
            The gradual accumulation of information about atomic and
            small-scale behaviour during the first quarter of the 20th
            century, which gave some indications about how small things
            do behave, produced an increasing confusion which was
            Heisenberg, and Born.
          </p>
        </div>

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt=""
          className="world"
        />
      </div>

      <div className="booking">

        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
          alt=""
          className="person"
        />

        <div className="details">
          <h2>Book Appointment</h2>

          <label>Name *</label>
          <input type="text" placeholder="Full Name *" />

          <label>Email address *</label>
          <input type="email" placeholder="example@gmail.com" />

          <label>Department *</label>
          <select>
            <option>Please Select</option>
            <option>Business Consulting</option>
            <option>Financial Planning</option>
            <option>Technology & IT</option>
          </select>

          <label>Time *</label>
          <select>
            <option>4:00 Available</option>
            <option>9:00 AM Available</option>
            <option>12:00 PM Available</option>
            <option>4:00 PM Available</option>
          </select>

          <button>Book Appointment</button>
        </div>

      </div>

    </div>
    
  )
}

export default Section5
