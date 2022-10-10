
const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
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



