import { useLocation} from 'react-router-dom';
import SideBar from "../sidebar/sidebar"
import PropTypes from 'prop-types'
import './index.css'
import { SearchContext } from './SearchContext';
import { useState } from 'react';

function Structure({children}) {
 const location = useLocation();
 const currentPath = location.pathname;
 const [query, setQuery] = useState('');

 return (
   <div className="container">
           <div className="navbar">
               <SideBar />
           </div>

           <div className="content">
               {currentPath !== '/register' && currentPath !== '/login' && (
               <div className="searchbar">   
                      <input 
                        type="text" 
                        value={query} 
                        onChange={e => setQuery(e.target.value)} 
                        className="search" 
                        placeholder="Search" 
                    />
               </div>
                )}
            <SearchContext.Provider value={query}>
               <div className="item">
                  {children}
               </div>               
            </SearchContext.Provider>

           </div>

       </div>
 )
}

Structure.propTypes = {
   children: PropTypes.node,
};

export default Structure
