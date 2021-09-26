const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({

    user_name: {
        type: String
    },

    user_email: {
        type: String
    },

    user_phone: {
        type: String
    },

    user_username: {
        type: String
    },

    user_password: {
        type: String
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User