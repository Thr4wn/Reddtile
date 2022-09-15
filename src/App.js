import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { PhotoGrid } from './Components/PhotoGrid/PhotoGrid';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { SubReddit } from './Components/SubReddit/SubReddit';
import { getSearchPosts, getSubRedditPosts } from './Components/Tester/Tester';
import { GridLoader } from 'react-spinners';


export default function App() {

  const [sidebar, setSideBar] = useState(false);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // isMobile is given as a prop to components so they can render different jsx, not just css
  const [isMobile, setIsMobile] = useState(false);

// holds css styles for the loader from react-spinners
  const override ={
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "25vh",
    width: "40vw",
  };


/* an async function that queries the API for particular subs */
const getSubData = async (subReddit) => {
  setIsLoading(true);
  const results = await getSubRedditPosts(subReddit);
  
  /* What follows is a workaround also used in getSearchData to deal with edge cases. We check the array of
  objects to make sure valid posts are returned and, if so, set state with the results. If what is returned
  is invalid, we set state to be 0 - this condition is checked for in PhotoGrid, where it will trigger
  an alternate render. */
  if(results[0].author) {
    //set state with the results
    setItems(results);
    setIsLoading(false);
  } else {
    setItems(0);
    setIsLoading(false)
  }
  };

const getSearchData = async (searchTerm) => {
  const search = searchTerm.replaceAll(' ', '%20');
  setIsLoading(true);
  const results = await getSearchPosts(search);
  if(results[0].author) {
    //set state with the results
    setItems(results);
    setIsLoading(false);
  } else {
    setItems(0);
    setIsLoading(false);
  }
};

//useEffect detects window size and changes state from desktop to mobile
useEffect (() => {
  if (window.innerWidth > 767) {
    setIsMobile(false);
  } else if (window.innerWidth < 767) {
    setIsMobile(true);
  }
}, []);

 /*useEffect returns the initial view of data on render - the most popular image posts on reddit */
 useEffect(() => {
  getSubData('/r/popular');
}, []);

/* this is another effect that handles resizing of the window to set the mobile styles for the subReddit
component. I'm pretty sure it's only necessary in dev, but maybe for edge cases it's good? */
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 767) {
      setIsMobile(false);
    } else if (window.innerWidth < 767) {
      setIsMobile(true);
    }
  };
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
  
  /* toggleMenu function changes the boolean state of sidebar, a value which is passed to the SubReddit 
  component and is used to determine whether the sidebar menu is displayed */
  const toggleMenu = () => {
    setSideBar(!sidebar);
  };

  return (
    <div className="App">
      <SubReddit showSidebar={sidebar} getSubData={getSubData} isMobile={isMobile} />
      <div className="Header">
        <div className="Logo">
          <button onClick={() => getSubData('/r/popular')}><span>R</span>eddtile</button>
        </div>
        <SearchBar onSearch={getSearchData} isMobile={isMobile} />
        {(!isMobile ?  <button className="btn" onClick={toggleMenu}>Subreddits</button> 
          : <button className="mobileButton" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>)}
      </div>
      {isLoading ? 
        <div className='loader-container'>
          <GridLoader color={'#ff4500'} cssOverride={override} size={50}/>
        </div>
        : <div className="body">
        <PhotoGrid items={items} homeBtn={getSubData} isMobile={isMobile} />
      </div> }
    </div>
  );
}

