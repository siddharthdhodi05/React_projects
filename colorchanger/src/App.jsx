import { useState } from "react"



function App() {
  let [color, setcolor] = useState("grey")
  const colorchange = (coloor) =>{
    setcolor(coloor)

  }

  return (
    <>
      <div className="h-screen w-dvw duration-200" style={{backgroundColor:color}}>
        <div className="flex flex-wrap justify-center bg-slate-400 gap-3 shadow-lg px-3  rounded-3xl py-16">
          <button className=" outline-none px-6 py-6 rounded-2xl m-3 bg-red-600" onClick={()=>colorchange("red")}>red</button>
          <button className=" outline-none px-6 py-6 rounded-2xl m-3 bg-blue-600"onClick={()=>colorchange("blue")}>blue</button>
          <button className=" outline-none px-6 py-6 rounded-2xl m-3 bg-yellow-500"onClick={()=>colorchange("yellow")}>yellow</button>
          <button className=" outline-none px-6 py-6 rounded-2xl m-3 bg-white"onClick={()=>colorchange("white")}>white</button>
          <button className=" outline-none px-6 py-6 rounded-2xl m-3 bg-green-500"onClick={()=>colorchange("green")}>green</button>
          <button className=" outline-none px-6 py-6 rounded-2xl m-3 bg-purple-600"onClick={()=>colorchange("purple")}>purple</button>
          <button className=" outline-none px-6 py-6 rounded-2xl m-3 bg-gray-400"onClick={()=>colorchange("gray")}>gray</button>
          <button className=" outline-none px-6 py-6 rounded-2xl m-3 bg-teal-400"onClick={()=>colorchange("teal")}>teal</button>

        </div>
      </div>
    </>
  )
}

export default App
