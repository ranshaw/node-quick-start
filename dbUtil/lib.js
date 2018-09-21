const { config } = require('../config')
const mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://127.0.0.1:27017/workbench', { useMongoClient: true });

mongoose.Promise = global.Promise;
mongoose.set('debug', config.mongooseDebug);

module.exports = {
    db,
    mongoose
};