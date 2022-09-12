import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

export const SearchBar = ({ onSearch, isMobile }) => {
   const [input, setInput] = useState();

    const inputChangeHandler = (e) => {
        setInput(e.target.value);
    };


    if (isMobile) {
        return (
            <div className="mobileSearch">
                <input className="mobileSearchInput" placeholder="Search..."
                type="text" onChange={inputChangeHandler} />
                <button className="mobileSearchSubmit" onClick={(() =>onSearch(input))}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        )
    }
    return (
        <div className="SearchBar">
            <form onSubmit={(()=>onSearch(input))}>
            <input placeholder="Search..." type="text" onChange={inputChangeHandler}/>
            <button className="SearchButton" type="submit">SEARCH</button>
            </form>
        </div>
    )
};