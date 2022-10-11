
const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    profileImage: {

        data: Buffer,
        contentType: String

    },
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,

    }



});
const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;



