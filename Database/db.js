const mongoose = require('mongoose');
const config = require('../config/config.js');

const connectToMongo = () => {

    //getting all the secret details from config || .env file
    const { USERNAME, PASSWORD, DATABASENAME } = config
    const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.bulhrac.mongodb.net/${DATABASENAME}?retryWrites=true&w=majority`

    mongoose.connect(URI).then(success => console.log(' connected with db successfully'))
}

module.exports = connectToMongo;





