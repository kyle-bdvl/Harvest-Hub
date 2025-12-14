import { useNavigate } from "react-router-dom"
export default function Home() {
  const navi = useNavigate()

  function handleNavi(){
    navi('/shopping')
  }
  return (
    <>
      <div>
        Home Page
      </div>
      <button onClick={handleNavi}> To Shopping Page</button>
    </>

  )
}