import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    albums: [],
    posts: [],
    loading: false,
    error: false
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setAlbums: (state, action) => {
      state.albums = action.payload
    },
    setPosts: (state, action) => {
      state.posts = action.payload
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
