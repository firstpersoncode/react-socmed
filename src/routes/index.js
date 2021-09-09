import { Switch, Route } from "react-router-dom"

import Feed from "./Feed"
import Post from "./Post"
import User from "./User"
import NotFound from "./NotFound"

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Feed />
      </Route>

      <Route path="/user/:id">
        <User />
      </Route>

      <Route path="/post/:id">
        <Post />
      </Route>

      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}
