import React from 'react'
import { FirebaseContext } from '@lib/firebaseContext'
import { WithFirebase } from './types'

export const withFirebase: WithFirebase = (Component) => (props) => (
  <FirebaseContext.Consumer>
    {(context) => (
      <Component
        {...props}
        {...context}
      />
    )}
  </FirebaseContext.Consumer>
)
