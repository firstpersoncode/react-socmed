import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import post from './reducers/post'

const reducer = combineReducers({
  post: post.reducer
})

export default configureStore({ reducer })
