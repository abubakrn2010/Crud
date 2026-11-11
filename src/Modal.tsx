
const Modal = ({open,children}) => {
  return (
    
        open? <div style={{background:'rgba(214,214,215,0.5)'}} className=" w-full h-screen absolute">
        <div className="bg-white w-[300px] h-[200px] m-auto mt-[100px]">
       {
        children
       }

        </div>
      </div>:null
    
  )
}

export default Modal
