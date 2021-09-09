import slice from "."

const { setData, setAlbums, setPosts, setLoading, setError } = slice.actions

export const fetchAlbums = (id) => async dispatch => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id + "/albums")

    if (!res.ok) {
      throw res
    }

    const albums = await res.json()
    dispatch(setAlbums(albums))
  } catch (err) {
    throw err
  }
}

export const fetchPosts = (id) => async dispatch => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id + "/posts")

    if (!res.ok) {
      throw res
    }

    const posts = await res.json()
    dispatch(setPosts(posts))
  } catch (err) {
    throw err
  }
}

export const getUser = (id) => async dispatch => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(false))

    dispatch(fetchAlbums(id))
    dispatch(fetchPosts(id))

    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

    if (!res.ok) {
      throw res
    }

    const user = await res.json()
    dispatch(setData(user))
    dispatch(setLoading(false))
  } catch (err) {
    dispatch(setLoading(false))
    dispatch(setError(true))
    console.error(err)
    throw err
  }
}
