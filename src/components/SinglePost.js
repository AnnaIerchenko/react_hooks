import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContextProvider'

const SinglePost = () => {
  const login = useContext(LoginContext)
  console.log(login)
  return (
    <h3>Single Post</h3>
  )
}

export default SinglePost