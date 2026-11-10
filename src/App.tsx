import { useState } from "react";


function App() {
  const [data,setdata]=useState([
    {
      id:1,
       name:'Ali',
       age:22
    },
     {
      id:2,
       name:'Vali',
       age:24
    },
     {
      id:3,
       name:'Haitaly',
       age:27
    }
  ])

const DeleteData=(id:number)=>{
  setdata(data.filter((el) => el.id!=id))
}


  return (
  <div className=""></div>
  )
}

export default App
