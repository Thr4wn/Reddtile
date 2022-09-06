/* This works by calling getPostData from App.js. getPostData receives the term and calls the async function
 redditTest to return the JSON object from the reddit API. 
 After this is returned, getPostData iterates over it and pulls the necessary key:value pairs into the data 
array. 
There is also the async function getComments, which returns the comment object. This is used by the
CommentList component. */

const removeAmp = url => {
    return url.replaceAll('amp;', '');
};

const redditTest = async (searchTerm) => {
    try {
        const response = await fetch(`https://www.reddit.com/r/${searchTerm}.json?`);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;

        }
    } catch (err) {
        console.log(err);
    }

};

export const getPostData = async (searchTerm) => {
    const listings = await redditTest(searchTerm);
    const children = listings.data.children;
    console.log(children);
    const data = [{}];
    let c = 0;
    for (let i = 0; i < children.length; i++) {
        if (children[i].data.domain.includes('i.redd.it')) {
            data[c] = {
           author: children[i].data.author,
           subreddit: children[i].data.subreddit,
           title: children[i].data.title,
           media: children[i].data.url,
           permalink: children[i].data.permalink,
        }
        c++;
    }}
    console.log(data);
    return data;
};

export const getComments = async (permalink) => {
    try {
    const response = await fetch(`https://www.reddit.com/${permalink}.json`);
    if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse[1].data.children;
        } 
    } catch (err) {
        console.log(err);
    }
};

export const getSubreddits = async () => {
    try {
        const response = await fetch(`https://www.reddit.com/subreddits.json`);
    if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.data.children;
     }
    } catch (err) {
        console.log(err);
    }
};
