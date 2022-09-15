//Comment List component will map over comments and display them across the Photo Grid part of the screen.
import React, { useState, useEffect } from 'react';
import { Comment } from '../Comment/Comment';
import { getComments } from '../API/RedditAPI';
import './CommentList.css';

export const CommentList = ({ permalink, toggleComments }) => {
    /* The setup for CommentList allows state to begin as an empty array. On the initial render of 
    CommentList, triggered in the Post component, it will go through the useEffect call, calling
    commentGetter, which is itself an async call to getComments. This creates an array of comments and then
    puts it into state with the stateSetter. */
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const commentGetter = async (permalink) => {
            const commentArray = await getComments(permalink);
            let comments =[{}]
            for (let j = 0; j < commentArray.length; j++) {
                comments[j] = {author: commentArray[j].data.author, body:commentArray[j].data.body};
            }
            //push comments array into state
           setComments(comments);
        };
        //actually call the async function on render
        commentGetter(permalink);
        }, []);

   return (
        <div className="wrapper">
            <span className="commentBackground" onClick={toggleComments}></span>
            <div className="commentList">
                {comments.map((item, index) => (<Comment key={index} item={item} /> ))}
            </div>
        </div>
    );
}; 
