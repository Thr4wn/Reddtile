import React from 'react';

export const Comment = ({ item }) => {

    const {
        author,
        body,
        date
    } = item;
    

    return (
    <div className="comment">
        <h4>{author}</h4>
        <h5>{date}</h5>
        <p>{body}</p>
    </div>
    )
};