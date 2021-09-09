import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    comments: [],
    owner: {},
    loading: false,
    error: false
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setComments: (state, action) => {
      state.comments = action.payload
    },
    setOwner: (state, action) => {
      state.owner = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },
})

export default slice
