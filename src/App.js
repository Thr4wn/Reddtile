import React, { useState, useEffect } from 'react';
import './App.css';
import { PhotoGrid } from './Components/PhotoGrid/PhotoGrid';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { SubReddit } from './Components/SubReddit/SubReddit';
import { getSearchPosts, getSubRedditPosts } from './Components/Tester/Tester';


export default function App() {

  const [sidebar, setSideBar] = useState(false);
  const [items, setItems] = useState([]);


/* an async function that queries the API for particular subs */
const getSubData = async (subReddit) => {
  const results = await getSubRedditPosts(subReddit);
  
  /* What follows is a workaround also used in getSearchData to deal with edge cases. We check the array of
  objects to make sure valid posts are returned and, if so, set state with the results. If what is returned
  is invalid, we set state to be 0 - this condition is checked for in PhotoGrid, where it will trigger
  an alternate render. */
  if(results[0].author) {
    //set state with the results
    setItems(results);
  } else {
    setItems(0);
  }
  };

const getSearchData = async (searchTerm) => {
  const search = searchTerm.replaceAll(' ', '%20');
  const results = await getSearchPosts(search);
  if(results[0].author) {
    //set state with the results
    setItems(results);
  } else {
    setItems(0);
  }
};


 /*useEffect returns the initial view of data on render - the most popular image posts on reddit */
 useEffect(() => {
  getSubData('/r/popular');
}, []);
  
  /* toggleMenu function changes the boolean state of sidebar, a value which is passed to the SubReddit 
  component and is used to determine whether the sidebar menu is displayed */
  const toggleMenu = () => {
    setSideBar(!sidebar);
  };

  return (
    <div className="App">
      <SubReddit showSidebar={sidebar} getSubData={getSubData} />
      <div className="Header">
        <div className="Logo">
          <button onClick={() => getSubData('/r/popular')}><span>R</span>eddtile</button>
        </div>
        <SearchBar onSearch={getSearchData} />
        <button className="btn" onClick={toggleMenu}>Subreddits</button>
      </div>
      <div className="body">
        <PhotoGrid items={items} homeBtn={getSubData} />
      </div>
    </div>
  );
}

