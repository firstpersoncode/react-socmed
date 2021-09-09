import { useState } from "react"
import { Box, AppBar, Tabs, Tab, Divider, ImageList, ImageListItem, Button } from "@material-ui/core"
import { Toc, Apps } from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  posts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  postList: {
      maxWidth: 500,
  },
  albums: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  albumList: {
    maxWidth: 500,
  },
  albumItem: {
    boxShadow: "0 5px 5px rgba(0,0,0,0.1)",
    position: "relative",
    "& h5": {
      textAlign: "center",
      position: "absolute",
      top: 0, left: 0, right: 0, bottom: 0
    }
  },
  toolBar: {
    margin: "15px 0"
  }
}));

export default function UserSection({ posts, albums }) {

  const classes = useStyles();
  const [section, setSection] = useState(0)
  function handleChangeSection(e, v) {
    setSection(v)
  }

  return (
    <>
      <AppBar position="sticky" className={classes.toolBar}>
        <Tabs value={section} onChange={handleChangeSection}
          scrollButtons="auto"
          centered>
          <Tab icon={<Toc />} />
          <Tab icon={<Apps />} />
        </Tabs>
      </AppBar>

      {
        section === 0
          ? <Box px={5} className={classes.posts}>
            {
              posts.length
                ? <ul className={classes.postList}>
                  {
                    posts.map((p, i) => (
                      <li key={i}>
                        <h5>{p.title}</h5>
                        <p>{p.body}</p>
                        <Divider />
                      </li>
                    ))
                  }
                </ul>
                : null
            }
          </Box>
          : null
      }

      {
        section === 1
          ? <Box px={5} className={classes.albums}>
            {
              albums.length
                ? <ImageList rowHeight={160} className={classes.albumList} cols={3}>
                    {albums.map((album, i) => (
                      <ImageListItem button key={i} cols={1} className={classes.albumItem}>
                        <Button fullWidth>
                          <img src="/logo192.png" />
                          <h5>{album.title}</h5>
                        </Button>
                      </ImageListItem>
                    ))}
                  </ImageList>
                : null
            }
          </Box>
          : null
      }
    </>
  )
}
