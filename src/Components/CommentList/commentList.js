//Comment List component will map over comments and display them across the Photo Grid part of the screen.
import React from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export const CommentList = ({ comments, toggleComments }) => {
   return (
        <div className="wrapper">
            <span className="commentBackground" onClick={toggleComments}></span>
            <div className="commentList">
                {comments.map((item, index) => (<Comment key={index} item={item} /> ))}
            </div>
        </div>
    );
}; 
