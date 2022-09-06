import React, { useState } from 'react';
import { CommentList } from '../CommentList/CommentList';
import './Post.css';

export const Post = ({ item }) => {
const {
    title,
    media,
    author,
    subreddit,
    permalink
} = item;

    const [showComments, setShowComments] = useState(false);

    const toggleComments = event => {
        setShowComments(current => !current);
    };

    return (
    <div className="post">
        <h3>{title}</h3>
        <img src={media} />
        <div className="info">
            <p>{author}</p>
            <p>{subreddit}</p>
        </div>
        <button className="comments" onClick={toggleComments}>comments</button>
        {showComments && <CommentList permalink={permalink} toggleComments={toggleComments} />}
    </div>
    )
};