import React, { useState } from 'react';
import './App.css';
import { fakeData } from './Components/FakeData/fakeData';
import { PhotoGrid } from './Components/PhotoGrid/PhotoGrid';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { SubReddit } from './Components/SubReddit/SubReddit';


export default function App() {

  const [sidebar, setSideBar] = useState(false);
  const [items, setItems] = useState(fakeData);
  console.log(sidebar);

  /* toggleMenu function changes the boolean state of sidebar, a value which is passed to the SubReddit 
  component and is used to determine whether the sidebar menu is displayed */
  const toggleMenu = () => {
    setSideBar(!sidebar);
    console.log(sidebar);
  };

    const onSearch = (input) => {
      const matches = fakeData.filter(element => (element.title.includes(input)));
      setItems(matches);
  };
/* Once fakeData is removed, it will be necessary to set create an API call that pulls the most popular posts and factors the data 
before passing it to the initial state. SearchBar will also need this API call function - perhaps this should be its own component?
It may be easiest to do this in Router as it is in the adopt-a-pet starter project search function */

  return (
    <div className="App">
      <SubReddit showSidebar={sidebar} />
      <div className="Header">
        <div className="Logo">
          <h2><span>R</span>eddtile</h2>
        </div>
        <SearchBar onSearch={onSearch} />
        <button className="btn" onClick={toggleMenu}>Subreddits</button>
      </div>
      <div className="body">
        <PhotoGrid items={items} />
      </div>
    </div>
  );
}

