import React from 'react';
import { Post } from '../Post/Post';
import './PhotoGrid.css';

export const PhotoGrid = ({ items }) => {
    return (
    <div className="photoGrid">
        { console.log(items) }
       { items.map((item, index) => (<Post key={index} item={item} /> ))}
    </div>
    );
};