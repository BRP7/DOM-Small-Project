import { useState } from 'react'
import './App.css'

function App() {
   const [color, setColor] = useState("lightblue")


  return (
   <div className="d1" style={{backgroundColor:color}}>
    <div className="d2" style={{backgroundColor:"white",marginTop:"20px"}}>
      <button className='b1' style={{backgroundColor:"red", color:"white"}} onClick={()=>setColor("red")}>Red</button>
      <button className='b1'style={{backgroundColor:"green" ,color:"white"}} onClick={()=>setColor("green")}>Green</button>
      <button className='b1'style={{backgroundColor:"black", color:"white"}} onClick={()=>setColor("black")}>Black</button>
      <button className='b1' style={{backgroundColor:"white"}} onClick={()=>setColor("white")}>White</button>
      <button className='b1'style={{backgroundColor:"Yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
      <button className='b1'style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
      <button className='b1' style={{backgroundColor:"purple" ,color:"white"}} onClick={()=>setColor("purple")}>Purple</button>
    </div>
   </div>
  )
}

export default App
