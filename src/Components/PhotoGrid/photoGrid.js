import React from 'react';
import { Post } from '../Post/Post';
import './PhotoGrid.css';

export const PhotoGrid = ({ items, homeBtn }) => {
    /* We check to make sure that the items object actually contains information before rendering
    the grid of posts.  */
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