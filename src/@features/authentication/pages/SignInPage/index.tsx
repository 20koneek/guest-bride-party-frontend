import React, { FC } from 'react'
import { navigate } from '@reach/router'
import { Props } from './types'
import { SignIn } from './SignIn'

export const SignInPage: FC<Props> = (props) => {
  setTimeout(async () => {
    if (props.currentUser) {
      await navigate('/')
    }
  }, 0)

  return (
    <SignIn {...props}/>
  )
}
