import React from 'react'
import { useUser } from '../lib/hooks'

const Home = () => {
  const user = useUser()

  return (
    <>
      <h1 className="text-3xl font-bold underline">Home</h1>

      <p>Steps to test this authentication example:</p>

      <ol>
        <li>Click Login and enter an email.</li>
        <li>
          You{'&apos'}ll be redirected to Home. Click on Profile, notice how your
          session is being used through a token stored in a cookie.
        </li>
        <li>
          Click Logout and try to go to Profile again. You{'&apos'}ll get redirected to
          Login.
        </li>
      </ol>

      <p>
        To learn more about Magic, visit their{' '}
        <a
          href="https://docs.magic.link/"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </a>
        .
      </p>

      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </>
  )
}

export default Home
