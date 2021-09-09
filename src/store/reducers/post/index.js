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
    addComment: (state, action) => {
      let currData = [].concat(state.comments)
      currData = [
        { client: true, id: currData.length, ...action.payload },
        ...currData
      ]

      state.comments = currData
    },
    deleteComment: (state, action) => {
      let currData = [].concat(state.comments)
      currData = currData.filter(c => c.id !== action.payload)
      state.comments = currData
    },
    updateData: (state, action) => {
      let updatedData = Object.assign({}, state.data)
      updatedData = { ...updatedData, ...action.payload }
      state.data = updatedData
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
