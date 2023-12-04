import { useLocation } from 'react-router-dom';
import SideBar from "../sidebar/sidebar"
import PropTypes from 'prop-types'
import './index.css'

function Structure({children}) {
 const location = useLocation();
 const currentPath = location.pathname;

 return (
   <div className="container">
           <div className="navbar">
               <SideBar />
           </div>

           <div className="content">
               {currentPath !== '/register' && currentPath !== '/login' && (
               <div className="searchbar">   
                      <input type="text" 
                          // value={} 
                          className="search" 
                          placeholder="Search" 
                          // onChange={(e) => setQuery()} 
                      /> 
               </div>
                )}
               <div className="item">
                  {children}
               </div>
           </div>

       </div>
 )
}

Structure.propTypes = {
   children: PropTypes.node,
};

export default Structure
