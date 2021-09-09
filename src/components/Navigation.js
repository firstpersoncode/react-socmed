import { useState } from "react"
import { Link } from "react-router-dom"
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { Home, Person, AddBox } from '@material-ui/icons'

export default function Navigation() {
  const [value, setValue] = useState(0)

  const handleChange = (e, v) => {
    setValue(v)
  }

  return (
    <AppBar position="fixed">
      <Tabs value={value} onChange={handleChange}
        scrollButtons="auto"
        centered>
        <Tab label="Feed" icon={<Home />} component={Link} to="/" />
        <Tab label="Post" icon={<AddBox />} />
        <Tab label="User" icon={<Person />} component={Link} to="/user/1" />
      </Tabs>
    </AppBar>
  )
}
