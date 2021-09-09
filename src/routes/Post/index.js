import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { Box, Avatar, Chip, Divider, Dialog, TextField, Button } from "@material-ui/core"
import { Person, Delete, Edit } from "@material-ui/icons"

import { getPost, updatePost, actionAddComment, actionDeleteComment } from "../../store/reducers/post/actions"
import { deletePost } from "../../store/reducers/posts/actions"

export default function Post() {
  const history = useHistory()
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data, comments, owner, loading, error } = useSelector(state => state.post)

  useEffect(() => {
    dispatch(getPost(id))
  }, [])

  const [editDialog, setEditDialog] = useState(false)
  const [postForm, setPostForm] = useState({ title: "", body: "" })

  function toggleEditDialog() {
    setEditDialog(v => {
      if (!v) {
        setPostForm(data)
      }

      return !v
    })
  }


  function handlePostChange(field) {
    return (e) => {
      setPostForm(v => ({ ...v, [field]: e.target.value }))
    }
  }

  function handleUpdate(e) {
    e.preventDefault()

    dispatch(updatePost(postForm))
    toggleEditDialog()
  }

  const [deleteDialog, setDeleteDialog] = useState(false)

  function toggleDeleteDialog() {
    setDeleteDialog(v => !v)
  }

  function handleDelete(e) {
    e.preventDefault()

    dispatch(deletePost(data.id))
    toggleDeleteDialog()
    history.push("/")
  }

  const [commentDialog, setCommentDialog] = useState(false)

  function toggleCommentDialog() {
    setCommentDialog(v => !v)
  }

  const [form, setForm] = useState({ email: "", name: "", body: "" })

  function handleChange(field) {
    return (e) => {
      setForm(v => ({ ...v, [field]: e.target.value }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    dispatch(actionAddComment(form))
    toggleCommentDialog()
  }

  function handleDeleteComment(c) {
    return (e) => {
      e.preventDefault()
      dispatch(actionDeleteComment(c.id))
    }
  }

  if (loading) {
    return <Box px={5}>Loading post ...</Box>
  }

  return (
    <>
      <Box px={5} display="flex" justifyContent="flex-end">
        <Button startIcon={<Edit />} variant="contained" color="primary" onClick={toggleEditDialog}>Edit</Button>
        <Button startIcon={<Delete />} variant="contained" color="secondary" onClick={toggleDeleteDialog}>Delete</Button>
      </Box>
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
                      {
                        c.client
                          ? (
                            <Box mt={5} display="flex" justifyContent="flex-end">
                              <Button color="secondary" onClick={handleDeleteComment(c)}><Delete /></Button>
                            </Box>
                          )
                          : null
                      }
                      <Divider />
                    </li>
                  ))
                }
              </ul>
            )
            : null
        }

        <Box my={5}>
          <Button variant="contained" color="primary" onClick={toggleCommentDialog}>Add comment</Button>
        </Box>
      </Box>

      <Dialog onClose={toggleEditDialog} open={editDialog}>
        <Box p={5}>
          <TextField label="Title" fullWidth value={postForm.title} onChange={handlePostChange("title")} />
          <TextField multiline rows={4} fullWidth label="Body" value={postForm.body} onChange={handlePostChange("body")} />
          <Box mt={5}>
            <Button variant="contained" color="primary" disabled={!postForm.title || !postForm.body} onClick={handleUpdate}>Update</Button>
          </Box>
        </Box>
      </Dialog>

      <Dialog onClose={toggleDeleteDialog} open={deleteDialog}>
        <Box p={5}>
          <p>Delete post {data.title} ?</p>
          <Box mt={5}>
            <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
          </Box>
        </Box>
      </Dialog>

      <Dialog onClose={toggleCommentDialog} open={commentDialog}>
        <Box p={5}>
          <TextField label="Email" type="email" fullWidth value={form.email} onChange={handleChange("email")} />
          <TextField label="Name" fullWidth value={form.name} onChange={handleChange("name")} />
          <TextField multiline rows={4} fullWidth label="Body" value={form.body} onChange={handleChange("body")} />
          <Box mt={5}>
            <Button variant="contained" color="primary" disabled={!form.email || !form.name || !form.body} onClick={handleSubmit}>Submit</Button>
          </Box>
        </Box>
      </Dialog>
    </>
  )
}
