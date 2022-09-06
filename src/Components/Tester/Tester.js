/* This works by calling getPostData from App.js. getPostData receives the term and calls the async function
 redditTest to return the JSON object from the reddit API. 
 After this is returned, getPostData iterates over it and pulls the necessary key:value pairs into the data 
array. It also calls the async function getComments, which returns the comment object from Reddit
and then calls comment Extractor in order to format and return the comments. 
The comments are returned as a nested object within the data object back up in getPostData
and the whole is shipped off to App.js to be distributed through the components. */

const removeAmp = url => {
    return url.replaceAll('amp;', '');
};

const redditTest = async (searchTerm) => {
    const limit = 20;
    try {
        const response = await fetch(`https://www.reddit.com/r/${searchTerm}.json?limit=${limit}`);
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
    for (let i = 0; i < children.length; i++) {
        if (children[i].data.domain.includes('i.redd.it')) {
            let c = 0;
            const comments = await getComments(children[i]);
            data[c] = {
           author: children[i].data.author,
           subreddit: children[i].data.subreddit,
           title: children[i].data.title,
           media: children[i].data.url,
           comments: comments,
        }
        c++;
    }}
    console.log(data);
    return data;
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
