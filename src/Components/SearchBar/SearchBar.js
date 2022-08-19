import React, {useState} from 'react';

export const SearchBar = ({ onSearch }) => {
   const [input, setInput] = useState();

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="SearchBar">
            <form onSubmit={onSearch[input]}>
            <input placeholder="Search..." type="text" onChange={inputChangeHandler}/>
            <button className="SearchButton" type="submit">SEARCH</button>
            </form>
        </div>
    )
};