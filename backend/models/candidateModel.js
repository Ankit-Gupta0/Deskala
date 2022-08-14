const mongoose = require('mongoose')

const candidateSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    dob: {
      type: Date,
      required: [true, 'Please add a date of birth'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
    },
    address: {
      type: String,
      required: [true, 'Please add a address'],
    },
    state: {
      type: String,
      required: [true, 'Please select a state'],
    },
    pincode: {
        type: Number,
        required: [true, 'Please add a pincode'],
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Candidate', candidateSchema)