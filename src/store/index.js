import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import posts from './reducers/posts'

const reducer = combineReducers({
  posts: posts.reducer
})

export default configureStore({ reducer })
