//Comment List component will map over comments and display them across the Photo Grid part of the screen.
import React from 'react';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => {
   return (
        <div className="commentList">
        {comments.map((item, index) => (<Comment key={index} item={item} /> ))}
        </div>
    );
}; 
