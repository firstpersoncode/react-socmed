import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { getPosts } from "./store/reducers/post/actions"

function App() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div className="App">
      <h1>React Socmed</h1>
      {
        data.length
          ? (
            <ul>
              {
                data.map((p, i) => (
                  <li key={i}>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </li>
                ))
              }
            </ul>
          )
          : null
      }

      {
        loading ? <p>Loading posts ... </p> : null
      }

      {
        error ? <p>Something went wrong !</p> : null
      }
    </div>
  )
}

export default App
