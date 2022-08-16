import React, { useState } from 'react';
import './App.css';
import { fakeData } from './Components/FakeData/fakeData';
import { PhotoGrid } from './Components/PhotoGrid/PhotoGrid';


export default function App() {

  const [items, newItems] = useState(fakeData);

  return (
    <div className="App">
      <PhotoGrid items={items} />
    </div>
  );
}

