import slice from "."

const { setData, setLoading, setError } = slice.actions

export const getPosts = () => async dispatch => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(false))
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
      throw res
    }

    const posts = await res.json()
    dispatch(setData(posts))
    dispatch(setLoading(false))
  } catch (err) {
    dispatch(setLoading(false))
    dispatch(setError(true))
    console.error(err)
    throw err
  }
}
