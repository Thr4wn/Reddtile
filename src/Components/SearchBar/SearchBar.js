import React, {useState} from 'react';

export const SearchBar = ({ onSearch }) => {
   /* const [input, setInput] = useState('');

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    };*/

    return (
        <div className="SearchBar">
            <input placeholder="Search..."  /*onChange={inputChangeHandler} onSubmit={onSearch(input)}*//>
            <button className="SearchButton" /*onClick={onSearch(input)}*/>SEARCH</button>
        </div>
    )
};