import "./Navbar.css";
import { ImMenu } from "react-icons/im";
import { Link } from "react-router-dom";
import Side from "../Side/Side";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";








const Navbar=()=>{
    const [btn,setBtn] = useState(false);
const handleBtn=()=>{
    setBtn(true);
}
const handleBtn1=()=>{
    setBtn(false);
}
    return(
        <>
        <nav>
            <div className="nav-1">
                {
                    btn ? <MdOutlineCancel onClick={handleBtn1} /> : <ImMenu onClick={handleBtn} />

                }
            
            </div>
            <ul className="nav-2">
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/signup" >Signup</Link></li>
            </ul>
        </nav>
        {
            btn && <Side/>
        }
        </>

    )
}
export default Navbar;