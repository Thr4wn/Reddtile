import React from 'react';
import { Post } from '../Post/Post';
import './PhotoGrid.css';

export const PhotoGrid = ({ items }) => {
    return (
    <div className="photoGrid">
       { items.map((item, index) => (<Post key={index} item={item} /> ))}
    </div>
    );
};