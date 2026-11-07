import "./section1.css";


const Card = ({tittl,name,des}) => {
  return (
    <div className="card1">
      <img src={tittl} alt="" />

      <div>
        <h2>{name}</h2>
        <p>{des}</p>
      </div>
    </div>
  )
}

export default Card
