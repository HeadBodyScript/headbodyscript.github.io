"use client"
import React from 'react'
import {
  useUser,
  withUser,
  withUserTokenSSR,
} from 'next-firebase-auth'

const Demo = () => {
  const user = useUser()
  return (
    <div>
      <p>Your email is {user.email ? user.email : 'unknown'}.</p>
    </div>
  )
}

// Note that this is a higher-order function.
// export const getServerSideProps = withUserTokenSSR()()

export default withUser()(Demo)