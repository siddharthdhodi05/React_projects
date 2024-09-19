import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className=' bg-orange-500 text-6xl p-10 text-white'>
      User:{userid}
    </div>
  )
}

export default User
