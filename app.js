const handlerTweetRouter = require('./src/routes/tweet');
const hanlderUserRouter = require('./src/routes/user');
const querystring = require('querystring');

// handle post data
const getPostData = (req) => {
    const promise = new Promise((resolve, reject)=> {
        if(req.method === 'POST' && req.headers['content-type'] === 'application/json'){
            let postData = '';
            req.on('data', chunk => {postData += chunk.toString();});
            req.on('end', ()=> {
                resolve(JSON.parse(postData));
            })
        }else{
            resolve({})
        }
    });
    return promise;
};
const serverHandler = (req, res) => {
    //get query params
    req.queryParams = querystring.parse(req.url.split('?')[1]);
    getPostData(req).then(postdata => {
        req.body = postdata;
         // setting res content type
        res.setHeader('Content-type', 'application/json');
        
        //handle the tweet router
        const tweetData = handlerTweetRouter(req, res);
        if(tweetData){
            res.end(JSON.stringify(tweetData));
            return;
        }

        //handle the user router
        const userProfileData = hanlderUserRouter(req, res);
        if(userProfileData){
            res.end(JSON.stringify(userProfileData));
            return;
        }

        //404 route handler
        res.writeHead(404, {'Contnet-type' : 'text/plain'});
        res.write('404 page not found');
        res.end();
    })
}

module.exports = serverHandler;