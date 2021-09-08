import slice from "."

const { setPosts } = slice.actions

export const getPosts = () => async dispatch => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
      throw res
    }

    const posts = await res.json()
    dispatch(setPosts(posts))
  } catch (err) {
    return console.error(err)
  }
}
