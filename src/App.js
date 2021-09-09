import { Box } from "@material-ui/core"

import Routes from "./routes"
import Navigation from "./components/Navigation"

export default function App() {

  return (
    <Box id="app" p={5} pt={10}>
      <Navigation />
      <h1>React Socmed</h1>
      <Routes />
    </Box>
  )
}
