import React from 'react';

export function post() {
    return (
    <div className="post">
    <div className="post-info">
        <h3>TITLE OF POST</h3>
        <img src="#" />
        <p>author of post</p>
        <button className="comments" onClick={commentToggle}>comments</button>
    </div>
</div>
    )
}