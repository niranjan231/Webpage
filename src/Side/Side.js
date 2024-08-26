import "./Side.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { ImMenu } from "react-icons/im";







const Side=()=>{
    return (
        <div className="side-1">
            <div className="side-2">
                <span><IoHomeOutline /></span>
                <span>Home</span>
            </div>
            <div className="side-2">
                <span><LuContact />
                </span>
                <span>Contect</span>
            </div>
            <div className="side-2">
                <span><ImMenu />
                </span>
                <span>Menu</span>
            </div>
            <div className="side-2">
                <span><IoHomeOutline /></span>
                <span>Home</span>
            </div>
            <div className="side-2">
                <span><IoHomeOutline /></span>
                <span>Home</span>
            </div>

        </div>
    )
}
export default Side