import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { getPosts } from "./store/reducers/posts/actions"

function App() {
  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="App">
      <h1>React Socmed</h1>
      {
        posts.length
          ? (
            <ul>
              {
                posts.map((post, i) => (
                  <li key={i}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </li>
                ))
              }
            </ul>
          )
          : null
      }
    </div>
  )
}

export default App
