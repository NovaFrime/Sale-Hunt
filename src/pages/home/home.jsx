import React, { useState, useEffect, useContext, useRef } from "react";
import Structure from "../../components/structure/structure";
import Card from "./../../components/card/card";
import './home.css';
import { SearchContext } from './../../components/structure/SearchContext.jsx';

const Home = () => {
 const [data, setData] = useState([]);
 const query = useContext(SearchContext);
 const [page, setPage] = useState(1);
 const scrollContainerRef = useRef(null);

 const handleScroll = () => {
     if (
       scrollContainerRef.current.scrollHeight -
         scrollContainerRef.current.scrollTop !==
       scrollContainerRef.current.clientHeight
     ) {
       return;
     }
     setPage(prevPage => prevPage + 1);
 };
 useEffect(() => {
     const fetchData = async () => {
       const response = await fetch(`https://api.captechvn.com/shopee?page=${page}`);
       const data = await response.json();
       setData(prevData => [...prevData, ...data]);
       const scrollContainer = scrollContainerRef.current;
       scrollContainer.addEventListener('scroll', handleScroll);
     }
     fetchData();
 }, [page]);

 return (
     <Structure>
         <div ref={scrollContainerRef} className="grid-container">
         {data
        //  .filter(item => item.name.includes(query))
         .map(item => (
            <Card 
                image={item.image} 
                name={item.name} 
                shop_location={item.shop_location} 
                short_url={item.short_url} 
                raw_discount={item.raw_discount +"%"} 
                price={new Intl.NumberFormat().format(item.price)+"đ"} 
                rating_star={item.rating_star} 
            />
            ))}
             <button className="loadButton" onClick={() => setPage(prevPage => prevPage + 1)}>Load more</button>
         </div>
     </Structure>
 )
}

export default Home;
