import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/charachters/CharacterGrid';
import Search from './components/ui/Search';
import Pagination from './components/Pagination';

function App() {

  const [items,setItems] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [query,setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  
  useEffect(()=>{
    const fetchItems = async () =>{
      
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)

    }  //axios returns a promise
    fetchItems()
  },[query]) // adding dependencies , whenever query value changes useeffect is called

  // Get current posts 
  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);
 
  //Change the page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container">
        <Header/>
        <Search getQuery={ (q)=>setQuery(q) } />
        <CharacterGrid 
        isLoading={isLoading}                 //passing states as props
        items = {currentItems}
        />
        <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={items.length} 
        paginate={paginate}
        />
    </div>
  );
}

export default App;
