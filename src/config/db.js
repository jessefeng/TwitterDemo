const env = process.env.NODE_ENV;

let MYSQL_CONFIG = {};

if(env === 'dev'){
    MYSQL_CONFIG = {
        host: 'mysqlinstance.cv4hon2njz1p.us-east-1.rds.amazonaws.com',
        user: 'jessefeng',
        password: '12345678',
        port: '3306',
        database: 'tweet_demo'
    }
}else if(env === 'production'){
    MYSQL_CONFIG = {
        host: 'mysqlinstance.cv4hon2njz1p.us-east-1.rds.amazonaws.com',
        user: 'jessefeng',
        password: '12345678',
        port: '3306',
        database: 'tweet_demo'
    }
}else{
    MYSQL_CONFIG = {
        host: 'mysqlinstance.cv4hon2njz1p.us-east-1.rds.amazonaws.com',
        user: 'jessefeng',
        password: '12345678',
        port: '3306',
        database: 'tweet_demo'
    }
}

module.exports = {
    MYSQL_CONFIG
}