import React,{useState} from "react"
import Crud from "./crud"
import Modal from "./Modal"



export default function App() {
    const [data,setdata]=useState([
        {
            id:1,
            name:'Ali',
            age:23
        },
         {
            id:2,
            name:'Ali',
            age:22
        },
         {
            id:3,
            name:'Ali',
            age:24
        }])

        const Deletedata=(id:number)=>{
            setdata(data.filter((el) => el.id!=id))
        }

        const [modaladd,setmodaladd]=useState(false)
        const [modaledit,setmodaledit]=useState(false)

        const [nameinp,setnameinp]=useState("")
        const [ageinp,setageinp]=useState("")

        const [idx,setidx]=useState(null)



        const handlesubmit=(event)=>{
            event.preventDefault()
            const newuser={
                id:Date.now(),
                name:event.target.inpname.value,
                age:event.target.inpage.value
            }
            setdata((prev)=>[...prev,newuser])
            setmodaladd(false)
        }


        const handleeditsubmit=(event)=>{
            event.preventDefault()
            const newuser={
                id:idx,
                name:event.target.inpname.value,
                age:event.target.inpage.value
            }
            setdata((prev)=>prev.map((el) => el.id==idx?newuser:el))
            setmodaledit(false)
        }


        const hendleopenedit=(e)=>{
            setnameinp(e.name)
            setageinp(e.age)
            setmodaledit(true)
            setidx(e.id)
        }


  return (
  <div>
    <div>

     <Modal open={modaladd}>

 <form onSubmit={handlesubmit} className="grid p-5 gap-3">
            <input name="inpname" className="px-2 py-1 border-1" type="text" placeholder="name"/>
            <input name="inpage" className="px-2 py-1 border-1"  type="text" placeholder="age"/>
            <button type="submit">submit</button>
            <button onClick={()=>setmodaladd(false)}>Cansel</button>
        </form>

     </Modal>

     <Modal open={modaledit}>

 <form onSubmit={handleeditsubmit} className="grid p-5 gap-3">
            <input defaultValue={nameinp} name="inpname" className="px-2 py-1 border-1" type="text" placeholder="name"/>
            <input defaultValue={ageinp} name="inpage" className="px-2 py-1 border-1"  type="text" placeholder="age"/>
            <button type="submit">submit</button>
            <button onClick={()=>setmodaledit(false)}>Cansel</button>
        </form>
        
     </Modal>

    </div>
    <button onClick={()=>setmodaladd(true)}>Open add</button>


    <Crud data={data} Deletedata={Deletedata} hendleopenedit={hendleopenedit}/>
    
  </div>
  )
}
