import { Box } from "@material-ui/core"

import Routes from "./routes"
import Navigation from "./components/Navigation"

export default function App() {

  return (
    <Box id="app" pt={10}>
      <Navigation />
      <Routes />
    </Box>
  )
}
