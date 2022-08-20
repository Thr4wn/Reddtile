import React from 'react';
import './Comment.css';

export const Comment = ({ item }) => {

    const {
        author,
        body,
        date
    } = item;
    

    return (
    <div className="comment">
        <div className="info">
            <h4>{author}</h4>
            <h4>{date}</h4>
        </div>
        <p>{body}</p>
    </div>
    )
};