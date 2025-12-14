import { useNavigate } from "react-router-dom"
export default function Shopping() {
  const navi = useNavigate()
  return (
    <>
      <div>
        Shopping Page
      </div>
      <button onClick={()=>{navi('/')}}>back To home</button>
    </>
  )
}