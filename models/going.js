const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goingSchema = new Schema({
    event:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
},{timestamps:true});

goingSchema.statics.add = async function(event,email) {
    const going = await this.findOne({ event,email }).catch(err=>{console.log(err)});
    if (going) {
      return going;
    }
    throw Error('Going not in DB');
  };

  const Going = mongoose.model('Going',goingSchema);

module.exports = Going;
