const mongoose = require('mongoose')

const connectionDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/notes-app");
        console.log('mongodb connected');
        
    } catch (error) {
        console.log('kuch problem hai',error);
        
    }
}

module.exports = connectionDB