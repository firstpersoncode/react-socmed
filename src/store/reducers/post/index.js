import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'post',
  initialState: {
    data: [],
    loading: false,
    error: false
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
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
