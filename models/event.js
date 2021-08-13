const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    minpeeps: {
        type: Number,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},{timestamps:true});

const Event = mongoose.model('Event',eventSchema);

module.exports = Event;
