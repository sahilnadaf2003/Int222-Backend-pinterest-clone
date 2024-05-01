const plm = require("passport-local-mongoose");
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/pinterest");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  profileImage: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  contact:{
    type:Number
  },
  boards:{
    type:Array,
    default:[]
  }
});

userSchema.plugin(plm);
 module.exports = mongoose.model('User', userSchema);
