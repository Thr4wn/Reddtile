//Comment List component will map over comments and display them across the Photo Grid part of the screen.
import React from 'react';
import { comment } from '../Comment/comment';

export function commentList() {
    return (
        <div className="commentList">
        <comment /> 
        </div>
    );
};
