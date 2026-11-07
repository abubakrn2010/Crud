
const Card = ({tittle,age,children}) => {
  return (
    <div>
      <h1>{tittle}</h1>
      <h3>{age}</h3>
      {children}
    </div>
  )
}

export default Card
