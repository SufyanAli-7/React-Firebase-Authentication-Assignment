import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NoPage from "@/components/Misc/NoPage"


const Dashboard = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NoPage/>} />
    </Routes>
  )
}

export default Dashboard