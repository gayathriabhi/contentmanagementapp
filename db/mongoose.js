const mongoose = require('mongoose');

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 45000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
};

const mongooseconnect = async(req, res) => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/cmsapp', options);
        console.log('Connection successful')
    } catch (error) {
        handleError(error);
    }
};

module.exports = mongooseconnect;

mongoose.connection.on('error', err => {
    logError(err);
});
