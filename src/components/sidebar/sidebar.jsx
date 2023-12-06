import './index.css';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
function removeToken() {
    console.log('remove token');
    localStorage.removeItem('token');
    // window.location.href = '/';
}
const SideBar = () => {
    const isUserLoggedIn = !!localStorage.getItem('token');

    return (
        <div className="sidebar">
            <Link to="/">{<CgMenuGridO size={25} className='icon'/>}Home</Link>
            <Link to="/login">{<IoIosLogIn  size={25} className='icon'/>}Log In</Link>
            {isUserLoggedIn ? (
                <>
                     <Link to="/favorite">{<FaRegStar  size={25} className='icon'/>}Favorite</Link>
                    <Link to="/" onClick={removeToken}>Logout</Link>
                </>
            ) : (
                <Link to="/register">{<FaUserPlus  size={25} className='icon'/>}Register</Link>
                )}
            {/* Call logout. */}
        </div>
    );
};

export default SideBar;