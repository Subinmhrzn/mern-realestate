import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Sigin from "./pages/Sigin";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignUp from "./pages/Signup";
import Header from "./components/Header";



export default function App() {
  return(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Sigin/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>

  </Routes>

  </BrowserRouter>
  )
  
}
