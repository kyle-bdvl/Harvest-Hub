import { Routes ,Route } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import Shopping from '../pages/Shopping'

export function AppRoutes(){
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="shopping" element={<Shopping/>}/>
    </Routes>
  );
}