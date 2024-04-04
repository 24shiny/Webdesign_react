import { BrowserRouter, Routes, Route } from "react-router-dom"
import RoutHome from "./RoutHome"
import RoutNav from "./RoutNav"
import RoutPageOne from "./RoutPageOne"
import RoutPageTwo from "./RoutPageTwo"


export default function RoutMain() {
  return (
    <BrowserRouter>
        <RoutNav />
        <Routes>
            <Route path="/" element={<RoutHome />}/>
            <Route path="/page1/:item" element={<RoutPageOne />}/>
            <Route path="/page2" element={<RoutPageTwo />}/>
        </Routes>
    </BrowserRouter>
  )
}
