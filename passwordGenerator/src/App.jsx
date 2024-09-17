import { Input } from "postcss";
import { useCallback, useEffect, useRef } from "react";
import { useState } from "react"


function App() {
  let [length, setlength] = useState(8);
  let [character,setcharacter] = useState(false);
  let [number, setnumber] = useState(false);
  let [password, passwordset] = useState("");

  const passref = useRef(null)
  
  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(character){
      str = str + "!@#$%^&*()_+";
    }
    if(number){
      str = str + "1234567890";
    }
    for (let i = 0; i < length; i++) {
    // Get a random index from the characters string
    const randomIndex = Math.floor(Math.random() * str.length + 1);
    
    // Append the character at the random index to the password
    pass += str.charAt(randomIndex);
    }
    passwordset(pass)

  },[length,number,character,passwordset])

  const copypass = useCallback(()=>{
    passref.current?.select()
    passref.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>passwordGenerator(),[length,number, character,passwordGenerator])
  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passref}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copypass}
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className=" cursor-pointer"
        onChange={(e) =>{setlength(e.target.value)}}
        />
          <label>Length: {length} </label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
        type="checkbox"
        defaultChecked={setnumber}
        id="numberInput"
        onChange={() => {
          setnumber((prev) => !prev)
        }}
      />
      <label>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
            <input
        type="checkbox"
        defaultChecked={setnumber}
        id="numberInput"
        onChange={() => {
          setnumber((prev) => !prev)
        }}
      />
      <label>Characters</label>
         
      </div>
    </div>
</div>

    </>
  )
}

export default App
