require('dotenv').config()

const config = {
    server: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: Number(process.env.PORT),
    options: {
        encrypt: false
    }
};


module.exports = config;