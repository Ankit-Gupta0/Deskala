import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import candidateService from './candidateService'

const initialState = {
  candidates: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new candidate
export const createCandidate = createAsyncThunk(
  'candidates/create',
  async (candidateData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await candidateService.createCandidate(candidateData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user candidates
export const getCandidates = createAsyncThunk(
  'candidates/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await candidateService.getCandidates(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete user candidate
export const deleteCandidate = createAsyncThunk(
  'candidates/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await candidateService.deleteCandidate(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCandidate.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createCandidate.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.candidates.push(action.payload)
      })
      .addCase(createCandidate.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getCandidates.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCandidates.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.candidates = action.payload
      })
      .addCase(getCandidates.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteCandidate.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteCandidate.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.candidates = state.candidates.filter(
          (candidate) => candidate._id !== action.payload.id
        )
      })
      .addCase(deleteCandidate.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = candidateSlice.actions
export default candidateSlice.reducer
