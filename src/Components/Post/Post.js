import React, { useState } from 'react';
import { CommentList } from '../CommentList/CommentList';
import { ImageFull } from '../ImageFull/ImageFull';
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
    const [ showImage, setShowImage] = useState(false);

    const toggleComments = event => {
        setShowComments(current => !current);
    };

    const toggleImage = event => {
        setShowImage(current => !current);
    };

    return (
    <div className="post">
        <h3>{title}</h3>
        <img src={media} onClick={toggleImage} />
        <div className="info">
            <p>{author}</p>
            <p>{subreddit}</p>
        </div>
        <button className="comments" onClick={toggleComments}>comments</button>
        {showComments && <CommentList permalink={permalink} toggleComments={toggleComments} />}
        {showImage && <ImageFull image={media} toggleImage={toggleImage} />}
    </div>
    )
};
