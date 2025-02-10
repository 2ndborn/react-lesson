import React from 'react'

function MethodsAsPropsChild(props) {
  return (
    <div>{props.isLoggedIn ? (
      <div>
          <p>Welcome to the site! Please complete the following:</p>
          <ol>
              <li>Confirm your email</li>
              <li>Complete your profile</li>
              <li>subscribe to the newsletter</li>
          </ol>
          <button onClick={props.handleSignOut}>Sign out</button>
      </div>
  ) : (
        <div>
          <p>Please sign up</p>
          <button onClick={() => props.handleSignIn()}>Sign in</button>
        </div>
)}</div>
  )
}

export default MethodsAsPropsChild