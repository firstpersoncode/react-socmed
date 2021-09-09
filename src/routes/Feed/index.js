import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

import { getPosts } from "../../store/reducers/post/actions"

export default function Feed() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.post)

  useEffect(() => {
    if (!data.length) {
      dispatch(getPosts())
    }
  }, [])

  return (
    <div id="feed">
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
      { loading ? <p>Loading posts ... </p> : null }
      { error ? <p>Something went wrong !</p> : null }
    </div>
  )
}
