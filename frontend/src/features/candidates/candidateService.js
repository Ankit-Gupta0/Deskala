import axios from 'axios'

const API_URL = 'http://localhost:5000/api/candidates/'

// Create new candidate
const createCandidate = async (candidateData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, candidateData, config)

  return response.data
}

// Get user candidates
const getCandidates = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user candidate
const deleteCandidate = async (candidateId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + candidateId, config)

  return response.data
}

const candidateService = {
  createCandidate,
  getCandidates,
  deleteCandidate,
}

export default candidateService
