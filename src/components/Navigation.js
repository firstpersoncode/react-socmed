import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AppBar, Tabs, Tab, Dialog, TextField, Box, Button } from '@material-ui/core'
import { Home, Person, AddBox } from '@material-ui/icons'
import { useDispatch } from "react-redux"

import { addPost } from "../store/reducers/posts/actions"

export default function Navigation() {
  const location = useLocation()
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(["", "post", "user"].indexOf(location.pathname.split("/")[1]))
  }, [location])

  const [postDialog, setPostDialog] = useState(false)

  function togglePostDialog() {
    setPostDialog(v => !v)
  }

  const [form, setForm] = useState({ title: "", body: "" })

  function handleChange(field) {
    return (e) => {
      setForm(v => ({ ...v, [field]: e.target.value }))
    }
  }

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    dispatch(addPost(form))
    togglePostDialog()
  }

  return (
    <>
      <AppBar position="fixed">
        <Tabs value={value}
          scrollButtons="auto"
          centered>
          <Tab icon={<Home />} component={Link} to="/" />
          <Tab icon={<AddBox />} onClick={togglePostDialog} />
          <Tab icon={<Person />} component={Link} to="/user/1" />
        </Tabs>
      </AppBar>

      <Dialog onClose={togglePostDialog} open={postDialog}>
        <Box p={5}>
          <TextField label="Title" fullWidth value={form.title} onChange={handleChange("title")} />
          <TextField multiline rows={4} fullWidth label="Body" value={form.body} onChange={handleChange("body")} />
          <Box mt={5}>
            <Button variant="contained" color="primary" disabled={!form.title || !form.body} onClick={handleSubmit}>Submit</Button>
          </Box>
        </Box>
      </Dialog>
    </>
  )
}
