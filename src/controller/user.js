const login = (username, password) => {
    if(username === 'test' && password === 'pwd'){
        return true
    }
    return false;
}

module.exports = {login};