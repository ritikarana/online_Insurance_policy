const moongose = require('mongoose');

const connectDb = async () => {
    try {
        //await moongose.connect('mongodb://127.0.0.1:27017/mydb')
        await moongose.connect('mongodb://127.0.0.1:27017/mydb', {
            //useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,  // Adjust timeout for better connection handling
        }) 
        console.log("Connection is Successful")
    } catch (err) {
        console.log("Failed to connect ", err)
    };

}

module.exports = connectDb


