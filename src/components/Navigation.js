import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { Home, Person, AddBox } from '@material-ui/icons'

export default function Navigation() {
  const location = useLocation()
  const [value, setValue] = useState(0)

  useEffect(() => {
    setValue(["", "post", "user"].indexOf(location.pathname.split("/")[1]))
  }, [location])

  return (
    <AppBar position="fixed">
      <Tabs value={value}
        scrollButtons="auto"
        centered>
        <Tab icon={<Home />} component={Link} to="/" />
        <Tab icon={<AddBox />} />
        <Tab icon={<Person />} component={Link} to="/user/1" />
      </Tabs>
    </AppBar>
  )
}
