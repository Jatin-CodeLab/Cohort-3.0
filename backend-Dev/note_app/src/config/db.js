const mongoose = require('mongoose')

const connectionDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb_uri);
        console.log('mongodb connected');
        
    } catch (error) {
        console.log('kuch problem hai',error);
        
    }
}

module.exports = connectionDB