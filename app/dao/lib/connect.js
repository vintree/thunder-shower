const mongo = require('mongodb');
const ObjectID = mongo.ObjectID;
const mongoClient = mongo.MongoClient;

const {
    mongodb
} = require('../../../config/config.default')

module.exports = async (app) => {
    let db = await mongoClient.connect(mongodb);
    console.log('=======database is connect=======');
    return db;
}