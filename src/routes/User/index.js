import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Box, Avatar, Chip } from "@material-ui/core"
import { Phone, Mail, Language } from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';

import { getUser } from "../../store/reducers/user/actions"
import UserSection from "../../components/UserSection"

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  contact: {
    "& > *": {
      margin: "0 15px"
    }
  }
}));

export default function User() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data, posts, albums, loading, error } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUser(id))
  }, [])

  const classes = useStyles();

  return (
    <Box id="user">
      {
        !loading
          ? (
            <Box display="flex" flexWrap="wrap" flexDirection="column" justifyContent="center" alignItems="center" px={5}>
              <Avatar src="/user-placeholder.jpg" className={classes.avatar} />
              <h3>@{data.username}</h3>
              <h4>{data.name}</h4>
              <Box display="flex" justifyContent="center" alignItems="center" className={classes.contact}>
                {data.email ? <Chip clickable color="primary" icon={<Mail />} label={data.email} component="a" href={"mailto:" + data.email} /> : null}
                {data.phone ? <Chip clickable color="primary" icon={<Phone />} label={data.phone} component="a" href={"tel:" + data.phone} /> : null}
                {data.website ? <Chip clickable color="primary" icon={<Language />} label={data.website} component="a" href={"https://" + data.website} /> : null}
              </Box>
            </Box>
          )
          : <Box px={5}>Loading ...</Box>
      }

      {!loading ? <UserSection posts={posts} albums={albums} /> : null}
    </Box>
  )
}
