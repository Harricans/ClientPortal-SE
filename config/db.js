const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(process.env.MONGO_URI, {
        //Mongoose 6.0+ no longer supported
        //useNewUrlPaser: true,
        //useCreateIndex: true,
        //useUnifiedTopology: true,
        //useFindAndModify: true 
    });

    console.log("MongoDB connected")
}

module.exports = connectDB;