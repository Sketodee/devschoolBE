const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    surname : {
        type : String, 
        required: true
    }, 
    firstName: {
        type : String, 
        required: true
    }, 
    email : {
        type : String, 
        required: true
    }, 
    course : {
        type : String, 
        required: true
    }, 
    phone: {
        type : String, 
        required: true
    },
})

module.exports = mongoose.model('Applicant', orderSchema)