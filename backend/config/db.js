const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')
        console.log("Connection is Successful")
    } catch (err) {
        console.log("Failed to connect ", err)
    };

}

module.exports = connectDb;
