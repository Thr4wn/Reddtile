import React from 'react';

export const Tester = () => {
const subreddit = 'hot';
const limit = 10;


const redditTest = async () => {

    try {
        const response = await fetch(`https://www.reddit.com/${subreddit}.json?limit=${limit}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;

        }
    } catch (err) {
        console.log(err);
    }

};

const getPostData = async () => {
    const listings = await redditTest();
    const children = listings.data.children
    let data = [{}];
    for (let i = 0; i < children.length; i++) {
        const comments = await getComments(children[i]);
        console.log(comments);
        data[i] = {
           author: children[i].data.author,
           subreddit: children[i].data.subreddit,
           title: children[i].data.title,
           media: children[i].data.url,
           comments: comments,
    }
    console.log(data[0]);
    return data;
}
};

const getComments = async (child) => {
    const element = child.data;
    const {id, subreddit} = element;
    try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`);
    if (response.ok) {
        const jsonResponse = await response.json();
        return commentExtractor(jsonResponse);
        } 
    } catch (err) {
        console.log(err);
    }
};

const commentExtractor = (json) => {
    const commentArray = json[1].data.children;
    let comments =[{}]

    for (let j = 0; j < commentArray.length; j++) {
        comments[j] = {author: commentArray[j].data.author, body:commentArray[j].data.body};
    }
    return comments;
};

const hope = getPostData();


return (
    <div className="tester">
        {hope[0]}
    </div>
)
}