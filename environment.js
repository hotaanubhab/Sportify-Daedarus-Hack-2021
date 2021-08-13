require('dotenv').config();

var GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
var SAWO_KEY = process.env.SAWO_KEY;
var MONGO_URI = process.env.MONGO_URI;

module.exports = {
    GOOGLE_API_KEY,
    SAWO_KEY,
    MONGO_URI
}