import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    }
  },
})

export default slice
