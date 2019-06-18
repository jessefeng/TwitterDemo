const { login } = require('../controller/user');
const {SuccessModel, ErrorModel} = require('../model/resModel');

const handlerUserRouter = (req, res) => {
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];

    if(method === 'POST' && path === '/api/user/login'){
        const {username, password} = req.body;
        const validation = login(username, password);
        if(validation){
            return new SuccessModel('login success')
        }else{
            return new ErrorModel('login fail')
        }
    }
}

module.exports = handlerUserRouter;