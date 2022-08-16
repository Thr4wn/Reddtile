import React, { useState } from 'react';
import { CommentList } from '../CommentList/CommentList';

export const Post = ({ item }) => {
const {
    title,
    image,
    author,
    date,
    comments
} = item;

    const [showComments, setShowComments] = useState(false);

    const toggleComments = event => {
        setShowComments(current => !current);
    };

    return (
    <div className="post">
        <h3>{title}</h3>
        <img src={image} />
        <p>{author}</p>
        <p>{date}</p>
        <button className="comments" onClick={toggleComments}>comments</button>
        {showComments && <CommentList comments={comments} />}
    </div>
    )
};