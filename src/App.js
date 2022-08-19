import React, { useState } from 'react';
import './App.css';
import { fakeData } from './Components/FakeData/fakeData';
import { PhotoGrid } from './Components/PhotoGrid/PhotoGrid';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { SubReddit } from './Components/SubReddit/SubReddit';


export default function App() {

  const [items, setItems] = useState(fakeData);

    const onSearch = (input) => {
      const matches = fakeData.filter(element => (element.title.includes(input)));
      setItems(matches);
  };
/* Once fakeData is removed, it will be necessary to set create an API call that pulls the most popular posts and factors the data 
before passing it to the initial state. SearchBar will also need this API call function - perhaps this should be its own component?
It may be easiest to do this in Router as it is in the adopt-a-pet starter project search function */

  return (
    <div className="App">
      <div className="Header">
        <h2><span>R</span>eddtile</h2>
        <SearchBar onSearch={onSearch} />
        <SubReddit />
      </div>
      <PhotoGrid items={items} />
    </div>
  );
}

