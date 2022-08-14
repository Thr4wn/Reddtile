import React from 'react';


const showSideBar = false;

const toggleMenu = () => {
    showSideBar = !showSideBar;
}
export function subReddit () {
    
        if (!showSideBar) {
            return (
            <div id="main">
            <button className="btn" onClick={toggleMenu}>Subreddits</button>
            </div>
        )} else if (showSideBar) {
            return (
            <div id="sidebarMenu" class="sidebar">
                <a href="#">Subreddit 1</a>
                <a href="#">Subreddit 2</a>
                <a href="#">Subreddit 3</a>
                <a href="#">Subreddit 4</a>
                <a href="#">Subreddit 5</a>
                <a href="#">Subreddit 6</a>
                <a href="#">Subreddit 7</a>
                <a href="#">Subreddit 8</a>
            </div>
    )};
};