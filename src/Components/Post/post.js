import React from 'react';

export const Post = ({ item }) => {
const {
    title,
    image,
    author,
    date
} = item;
    return (
    <div className="post">
        <h3>{title}</h3>
        <img src={image} />
        <p>{author}</p>
        <p>{date}</p>
        <button className="comments">comments</button>
    </div>
    )
};