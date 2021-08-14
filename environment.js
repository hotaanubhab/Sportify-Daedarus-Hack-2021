require('dotenv').config();

var GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
var SAWO_KEY = process.env.SAWO_KEY;
var MONGO_URI = process.env.MONGO_URI;
var FONT_KEY = process.env.FONT_KEY;
var JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    GOOGLE_API_KEY,
    SAWO_KEY,
    MONGO_URI,
    FONT_KEY,
    JWT_SECRET
}