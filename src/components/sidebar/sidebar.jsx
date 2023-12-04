import './index.css';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="sidebar">
            <Link to="/">{<CgMenuGridO size={25} className='icon'/>}Home</Link>
            <Link to="/favorite">{<FaRegStar  size={25} className='icon'/>}Favorite</Link>
            <Link to="/login">{<IoIosLogIn  size={25} className='icon'/>}Login</Link>
            <Link to="/register">{<FaUserPlus  size={25} className='icon'/>}Register</Link>
            <Link to="/">{<IoIosLogOut size={25} className='icon'/>}Logout</Link>
            {/* Call logout. */}
        </div>
    );
};

export default SideBar;