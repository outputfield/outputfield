import React from 'react'
import { useUser } from '../lib/hooks'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <>
      <h1>Profile</h1>

      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </>
  )
}

export default Profile
