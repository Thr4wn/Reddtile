import React from 'react';
import { Post } from '../Post/Post';
import './PhotoGrid.css';

export const PhotoGrid = ({ items, homeBtn }) => {
    /* This is a small workaround code - when selecting a subreddit from the sidebar, occasionally an edge
    case would occur where an empty array was returned with an empty object. The original solution of 
    checking items.length > 0 would then return a single empty post with a non-functional comment button.
     By checking to see if the first 'item' object in the array has an author, we avoid this bug. */
    if (items !== 0) {
    return (
    <div className="photoGrid">
       { items.map((item, index) => (<Post key={index} item={item} /> ))}
    </div>
    )}
    return (
        <div className="noneFound">
            <h2>Sorry, no results were found.</h2>
            {/* the homebtn OnClick event fires the original render of getSubData('/r/popular').
             BIG BRAIN, I know. */}
            <button onClick={(() => homeBtn('/r/popular'))}>Home</button>
        </div>
    )
};