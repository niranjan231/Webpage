import {Routes,Route} from "react-router-dom"
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Signup from "./Page/Signup";
import Navbar from "./Navbar/Navbar";



function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
