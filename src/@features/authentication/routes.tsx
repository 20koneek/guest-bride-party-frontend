import React, { ReactElement } from 'react'
import { SignInPage, SignUpPage } from './pages'

export enum Routes {
  SignUp = '/sign-up',
  SignIn = '/sign-in',
}

export const authenticationRoutes: ReactElement[] = [
  <SignUpPage key={Routes.SignUp} path={Routes.SignUp}/>,
  <SignInPage key={Routes.SignIn} path={Routes.SignIn}/>,
]
