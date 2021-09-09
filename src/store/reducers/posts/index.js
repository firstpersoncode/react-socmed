import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'posts',
  initialState: {
    data: [],
    loading: false,
    error: false
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    addData: (state, action) => {
      let currData = [].concat(state.data)
      currData = [
        { id: currData.length, ...action.payload },
        ...currData
      ]

      state.data = currData
    },
    deleteData: (state, action) => {
      let currData = [].concat(state.data)
      currData = currData.filter(p => p.id !== action.payload)
      state.data = currData
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
