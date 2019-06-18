const getList = (author, keywords) => {
    return [
        {
            id:1,
            title: 'title 1',
            content: 'content 1',
            createTime: 1560304799325,
            author: 'author1'
        },
        {
            id:2,
            title: 'title 2',
            content: 'content 2',
            createTime: 1560304799325,
            author: 'author2'
        },
        {
            id:3,
            title: 'title 3',
            content: 'content 3',
            createTime: 1560304799325,
            author: 'author3'
        }
    ]
}

const getDetail = (id) => {
    return   {
        id:1,
        title: 'title 1',
        content: 'content 1',
        createTime: 1560304799325,
        author: 'author1'
    }
}

const newTweet = (blogData)=> {
    return{
        id: 100,
        title: blogData.title,
        content: blogData.content,
    }
}

const updateTweet = (tweetID, tweetData)=> {
    return true;
}

const deleteTweet = (tweetID) => {
    return true
}

module.exports = {
    getList, getDetail, newTweet, updateTweet, deleteTweet
}