import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { Box, Avatar, Chip, Divider } from "@material-ui/core"
import { Person } from "@material-ui/icons"

import { getPost } from "../../store/reducers/post/actions"

export default function Post() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data, comments, owner, loading, error } = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [])

  if (loading) {
    return <Box px={5}>Loading post ...</Box>
  }

  return (
    <Box id="user" px={5}>
      <h1>{data.title}</h1>
      <p>Owner: <Chip clickable color="primary" icon={<Person />} label={"@" + owner.username} component={Link} to={"/user/" + owner.id} /></p>
      <p>{data.body}</p>
      <h3>Comments:</h3>
      {
        comments.length
          ? (
            <ul>
              {
                comments.map((c, i) => (
                  <li key={i}>
                    <a href={"mailto:" + c.email}>{c.email}</a>
                    <h4>{c.name}</h4>
                    <p>{c.body}</p>
                    <Divider />
                  </li>
                ))
              }
            </ul>
          )
          : null
      }
    </Box>
  )
}
