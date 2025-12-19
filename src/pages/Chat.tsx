import { useNavigate } from "react-router-dom"
export default function Chat() {
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