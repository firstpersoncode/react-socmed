import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import posts from './reducers/posts'
import users from './reducers/users'
import user from './reducers/user'
import post from './reducers/post'

const reducer = combineReducers({
  posts: posts.reducer,
  users: users.reducer,
  user: user.reducer,
  post: post.reducer
})

export default configureStore({ reducer })
