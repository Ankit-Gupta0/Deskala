const express = require('express')
const router = express.Router()
const {
  getCandidates,
  setCandidate,
  updateCandidate,
  deleteCandidate,
  getOneCandidate
} = require('../controllers/candidateController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getCandidates).post(protect, setCandidate)
router.route('/:id').delete(protect, deleteCandidate).put(protect, updateCandidate).get(protect, getOneCandidate)

module.exports = router
