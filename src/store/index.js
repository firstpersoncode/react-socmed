import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import post from './reducers/post'
import user from './reducers/user'

const reducer = combineReducers({
  post: post.reducer,
  user: user.reducer
})

export default configureStore({ reducer })
