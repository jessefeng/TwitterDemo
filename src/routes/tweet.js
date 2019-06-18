const {getList, getDetail, newTweet, updateTweet, deleteTweet} = require('../controller/tweet');
const {SuccessModel, ErrorModel} = require('../model/resModel');
const handlerTweetRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const tweetID = req.queryParams.id;

    //get all tweets list
    if(method === 'GET' && path === '/api/blog/list'){
        const author = req.queryParams.author || '';
        const keywords = req.queryParams.keywords || '';
        const listData = getList(author, keywords);
        return new SuccessModel(listData, 'this is the tweets list');
    }
    //get tweet detail 
    if(method === 'GET' && path === '/api/blog/detail'){
        
        const tweetDetail = getDetail(tweetID);
        return new SuccessModel(tweetDetail, 'this is the tweet detail'); 
    }

    //create new tweet
    if(method === 'POST' && path === '/api/blog/new'){
        const tweetData = req.body;
        const newTweetData = newTweet(tweetData)
        return new SuccessModel(newTweetData, 'post a new tweet')
    }

    //create new tweet
    if(method === 'POST' && path === '/api/blog/update'){
        const result = updateTweet(tweetID, req.body);
        if(result){
            return new SuccessModel('update success')
        }else{
            return new ErrorModel('update fail')
        }
    }

    //create new tweet
    if(method === 'DELETE' && path === '/api/blog/delete'){
        const result = deleteTweet(tweetID);
        if(result){
            return new SuccessModel('delete success')
        }else{
            return new ErrorModel('delete fail')
        }
    }
}

module.exports = handlerTweetRouter;