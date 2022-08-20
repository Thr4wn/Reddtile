//Comment List component will map over comments and display them across the Photo Grid part of the screen.
import React from 'react';
import { Comment } from '../Comment/Comment';
import './CommentList.css';

export const CommentList = ({ comments, toggleComment }) => {
   return (
        <div className="commentBackground" onClick={toggleComment}>
            <div className="commentList">
                {comments.map((item, index) => (<Comment key={index} item={item} /> ))}
            </div>
        </div>
    );
}; 
