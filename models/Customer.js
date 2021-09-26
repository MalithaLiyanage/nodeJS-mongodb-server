const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
   
    customer_id: {
        type: Number
    },

    customer_name: {
        type: String
    },

    customer_email: {
        type: String
    },

    customer_mobile: {
        type: String
    },
    
    customer_image: {
        type: String
    }

}, {timestamps: true})

const Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer