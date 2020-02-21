import { withFirebase } from '@hoc/withFirebase'
import { SignUpPage as SignUp } from './SignUpPage'
import { SignInPage as SignIn } from './SignInPage'

export const SignUpPage = withFirebase(SignUp)
export const SignInPage = withFirebase(SignIn)
