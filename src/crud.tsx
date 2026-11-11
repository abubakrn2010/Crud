
const Crud = ({data,Deletedata,hendleopenedit}) => {
  return (
      <table>
        <thead>
            <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((el,i) => {
                    return <tr key={el.id}>
                        <td>{i+1}</td>
                        <td>{el.name}</td>
                        <td>{el.age}</td>
                        <td>
                            <button onClick={()=>Deletedata(el.id)}>Delete</button>
                            <button onClick={()=>hendleopenedit(el)}>Edit</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
    </table>
  )
}

export default Crud
