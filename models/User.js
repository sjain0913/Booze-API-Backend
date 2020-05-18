const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String
})

UserSchema.pre('save', function(next){
    var hash = bcryptjs.hashSync(this.password, 8);
    this.password = hash;
    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;