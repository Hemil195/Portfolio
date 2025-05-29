const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'First name is required'],
        trim: true,
        maxlength: [50, 'First name cannot exceed 50 characters']
    }, 
    lname: {
        type: String,
        required: [true, 'Last name is required'],
        trim: true,
        maxlength: [50, 'Last name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        }
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        validate: {
            validator: function(v) {
                return /^[0-9]{10}$/.test(v); // Simple 10-digit validation
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    messages: [{
        type: String,
        trim: true
    }]
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

// Create model 
const User = mongoose.model("User", userSchema);

module.exports = User;