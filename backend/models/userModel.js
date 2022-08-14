const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    phone: {
        type: Number,
        required: [true, 'Please add a phone no.'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)