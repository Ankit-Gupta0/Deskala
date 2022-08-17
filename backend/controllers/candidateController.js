const asyncHandler = require('express-async-handler')

const Candidate = require('../models/candidateModel')
const User = require('../models/userModel')

// @desc    Get candidates
// @route   GET /api/candidates
// @access  Private
const getCandidates = asyncHandler(async (req, res) => {
  const candidates = await Candidate.find({ user: req.user.id })

  res.status(200).json(candidates)
})

// @desc    Get one candidates
// @route   GET /api/candidates
// @access  Private
const getOneCandidate = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findById(req.params.id)
  console.log(candidate)
  res.status(200).json(candidate)
})

// @desc    Set candidate
// @route   POST /api/candidates
// @access  Private
const setCandidate = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.dob ||!req.body.email ||!req.body.address ||!req.body.state || !req.body.pincode) {
    res.status(400)
    throw new Error('All fields all compulsory')
  }

  const candidate = await Candidate.create({
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    address: req.body.address,
    state: req.body.state,
    pincode: req.body.pincode,
    user: req.user.id,
  })

  res.status(200).json(candidate)
})

// @desc    Update candidate
// @route   PUT /api/candidates/:id
// @access  Private
const updateCandidate = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findById(req.params.id)

  if (!candidate) {
    res.status(400)
    throw new Error('Candidate not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the candidate user
  if (candidate.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  const updatedCandidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedCandidate)
})

// @desc    Delete candidate
// @route   DELETE /api/candidates/:id
// @access  Private
const deleteCandidate = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findById(req.params.id)

  if (!candidate) {
    res.status(400)
    throw new Error('Candidate not found')
  }

  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the candidate user
  if (candidate.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await candidate.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getCandidates,
  setCandidate,
  updateCandidate,
  deleteCandidate,
  getOneCandidate
}
