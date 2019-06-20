const {exec} = require('../db/mysql');

const getList = (author, keywords) => {
    let sql = `select * from blogs where 1=1 `
    if(author){
        sql += `and author='${author}' `
    }
    if(keywords){
        sql += `and title like '%${keywords}%' `
    }
    sql += `order by createtime desc;`
   
    return exec(sql)
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