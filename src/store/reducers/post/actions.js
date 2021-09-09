import slice from "."

const { setData, setComments, setOwner, setLoading, setError } = slice.actions

export const fetchComments = (id) => async dispatch => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id + "/comments")

    if (!res.ok) {
      throw res
    }

    const comments = await res.json()
    dispatch(setComments(comments))
  } catch (err) {
    throw err
  }
}

export const fetchOwner = (id) => async dispatch => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

    if (!res.ok) {
      throw res
    }

    const user = await res.json()
    dispatch(setOwner(user))
  } catch (err) {
    throw err
  }
}

export const getPost = (id) => async dispatch => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(false))

    dispatch(fetchComments(id))

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)

    if (!res.ok) {
      throw res
    }

    const post = await res.json()
    dispatch(setData(post))
    await dispatch(fetchOwner(post.userId))
    dispatch(setLoading(false))
  } catch (err) {
    dispatch(setLoading(false))
    dispatch(setError(true))
    console.error(err)
    throw err
  }
}
