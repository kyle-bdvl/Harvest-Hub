import { useState } from 'react'
import {Header} from './components/Header'
import './App.css'

function App() {
  // const [variable, function] = useState(dataType)
  const [count, setCount] = useState<number>(0)
  const [count1, setCount1] = useState<number>(0)


  function handleClick(increment:number){
     setCount ((count)=> count +increment);
     console.log(count)
  }

  //purpose to return the value of setCount1 
  function handleClick2() {
    setCount1((count1)=> count1+1);
  }
  return (
    <>
    <div className='flex flex-col gap-4 '>
      <h1 className="bg-amber-300 flex ">Hello World</h1>
      <p className='mt-5'>This is harvest hub</p>
    </div>
    <Header>
      <p>I am the child of Header</p>
      <p>I am the child of Header</p>

      <p>I am the child of Header</p>

      <p>I am the child of Header</p>

      <p>I am the child of Header</p>

      <p>I am the child of Header</p>

    </Header>
    <Header name="Abinash" counter={count} />
    <button onClick={()=>{handleClick(10)}} className=" h-15 w-40 mt-1.5 bg-green-400 rounded-sm hover:cursor-pointer">Click Me</button>

    <button onClick={handleClick2} className=" h-15 w-40 mt-1.5 bg-blue-400 rounded-sm hover:cursor-pointer">Click Me</button>
    <p>You pressed the second button, {count1}</p>
    </>
  )
}

export default App
