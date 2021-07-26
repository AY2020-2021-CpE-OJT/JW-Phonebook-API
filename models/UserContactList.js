const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        trim: true
    },
    name: [
        {
            first_name: {
                type: String,
                required: true,
                min: 6,
                max: 255,
                trim: true
            },
            last_name: {
                type: String,
                required: true,
                min: 6,
                max: 255,
                trim: true
            },
        }
    ],
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now
    },
    data: [
        {
            contact: {
                phone_numbers: {
                    type: [String],
                    required: true,
                    min: 8,
                    max: 13,
                    trim: true
                },
                last_name: {
                    type: String,
                    required: true,
                    min: 3,
                    max: 255,
                    trim: true
                },
                first_name: {
                    type: String,
                    required: true,
                    min: 3,
                    max: 255,
                    trim: true
                }
            },
        }
    ]
});

module.exports = mongoose.model('User_Data', userSchema);