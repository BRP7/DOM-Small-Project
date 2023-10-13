import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const passwordRef=useRef(null)
  const [length, setLength] = useState(8)
  const [allowNum, setAllowNum] = useState(false)
  const [allowChar, setAllowChar] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenrator = useCallback(()=>{
    let pass="";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 
    if (allowNum==true){
      str += "0123456789"
  } 
    if(allowChar==true) 
    {
      str += "!@#$%^&*"
    }
  
    for(let i=0;i<=length;i++){
    let randIndex =Math.floor(Math.random()*str.length+1)
     pass +=str.charAt(randIndex);
    }
    setPassword(pass);
  },[length,allowChar,allowNum,setPassword]);

 const copyToClickBoard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])
    
useEffect(()=>{
   passwordGenrator()
},[length,allowChar,allowNum,passwordGenrator])

  return (
   <>
   <div className='bg-gray-800 m-30 text-white w-700 h-300'>
      <div className='bg-black w-500 h-200 rounded text-black rounded'>
          <input type="text" value={password} placeholder='password' ref={passwordRef} readOnly />
          <button onClick={copyToClickBoard} className='text-white w-10 rounded'>copy</button>
        </div> 
   <div>
    <input type="range" min={6} max={100}
    value={length} 
    onChange={(e)=>{setLength(e.target.value)}}/>
    <label>Length:{length}</label>
    <input type="checkbox"  onChange={()=>{
      setAllowNum((prev)=>!prev);
    }}  />
    <label>Number</label>
    <input type='checkbox' onChange={()=>{
     setAllowChar((prev)=>!prev);
    }} />
    <label>Character</label>
   </div>
   </div>
   </>
  )
}

export default App
