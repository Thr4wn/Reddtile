/* This works by calling getPostData from App.js. getPostData receives the term and calls the async function
 redditTest to return the JSON object from the reddit API. 
 After this is returned, getPostData iterates over it and pulls the necessary key:value pairs into the data 
array. 
There is also the async function getComments, which returns the comment object. This is used by the
CommentList component. */


export const getSubRedditPosts = async (subReddit) => {
    try {
        const response = await fetch(`https://www.reddit.com/${subReddit}.json?limit=99`);
        if (response.ok) {
            const jsonResponse = await response.json();
            const data = formatData(jsonResponse.data.children);
            return data;

        }
    } catch (err) {
        console.log(err);
    }

};

export const getSearchPosts = async (search) => {
    try {
        console.log(search);
        const response = await fetch (`https://www.reddit.com/search.json?q=${search}`);
        if (response.ok) {
            const jsonResponse = await response.json();
            const data = formatData(jsonResponse.data.children)
            return data;
        }
    } catch (err) {
        console.group(err);
    }
};

const formatData = async (jsonData) => {
    const data = [{}];
    let c = 0;
    for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].data.domain.includes('i.redd.it')) {
            data[c] = {
           author: jsonData[i].data.author,
           subreddit: jsonData[i].data.subreddit,
           title: jsonData[i].data.title,
           media: jsonData[i].data.url,
           permalink: jsonData[i].data.permalink,
        }
        c++;
    }}
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
