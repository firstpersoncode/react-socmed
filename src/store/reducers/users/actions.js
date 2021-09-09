import slice from "."

const { setData, setLoading, setError } = slice.actions

export const getUsers = () => async dispatch => {
  try {
    dispatch(setLoading(true))
    dispatch(setError(false))
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) {
      throw res
    }

    const users = await res.json()
    dispatch(setData(users))
    dispatch(setLoading(false))
  } catch (err) {
    dispatch(setLoading(false))
    dispatch(setError(true))
    console.error(err)
    throw err
  }
}
