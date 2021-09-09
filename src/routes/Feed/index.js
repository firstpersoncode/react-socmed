import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid } from "@material-ui/core"

import { getPosts } from "../../store/reducers/posts/actions"
import { getUsers } from "../../store/reducers/users/actions"

export default function Feed() {
  const dispatch = useDispatch()
  const { data: postsData, loading: postsLoading, error: postsError } = useSelector(state => state.posts)
  const { data: usersData, loading: usersLoading, error: usersError } = useSelector(state => state.users)

  useEffect(() => {
    if (!postsData.length) {
      dispatch(getPosts())
    }

    if (!usersData.length) {
      dispatch(getUsers())
    }
  }, [])

  return (
    <Box id="feed" px={5}>
      <Grid spacing={3} container>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <h3>Active users</h3>
          {
            usersData.length
              ? (
                <ul>
                  {
                    usersData.map((u, i) => (
                      <li key={i}>
                        <Link to={`/user/${u.id}`}>@{u.username}</Link>
                      </li>
                    ))
                  }
                </ul>
              )
              : null
          }
          { usersLoading ? <p>Loading users ... </p> : null }
          { usersError ? <p>Something went wrong !</p> : null }
        </Grid>

        <Grid item xs={12} sm={12} md={8} lg={10}>
          <h3>Feed</h3>
          {
            postsData.length
              ? (
                <ul>
                  {
                    postsData.map((p, i) => (
                      <li key={i}>
                        <Link to={`/post/${p.id}`}>
                          <h3>{p.title}</h3>
                          <p>{p.body}</p>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              )
              : null
          }
          { postsLoading ? <p>Loading posts ... </p> : null }
          { postsError ? <p>Something went wrong !</p> : null }
        </Grid>
      </Grid>
    </Box>
  )
}
