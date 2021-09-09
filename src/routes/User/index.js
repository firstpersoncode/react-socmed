import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { getUser } from "../../store/reducers/user/actions"

export default function User() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.user)

  useEffect(() => {
    if (!data.id) {
      dispatch(getUser(id))
    }
  }, [])

  return (
    <div id="user">
      User {id}
    </div>
  )
}
