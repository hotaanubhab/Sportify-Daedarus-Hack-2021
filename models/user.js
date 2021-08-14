const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
},{timestamps:true});

userSchema.statics.login = async function(user_id,email) {
    const user = await this.findOne({ user_id }).catch(err=>{console.log(err)});
    if (user) {
      return user;
    }
    throw Error('User not in DB');
  };

  const User = mongoose.model('User',userSchema);

module.exports = User;
