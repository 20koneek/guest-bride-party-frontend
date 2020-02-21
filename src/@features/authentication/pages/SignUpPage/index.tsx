import React, { FC } from 'react'
import { navigate } from '@reach/router'
import { OnSubmit, Props } from './types'
import SignUp from './SignUp'

export const SignUpPage: FC<Props> = ({ auth, ...props }) => {
  // const { error, data, loading } = useQuery<ProductUnit>(GET_PRODUCT_UNITS)

  setTimeout(async () => {
    if (props.currentUser) {
      await navigate('/')
    }
  }, 0)

  const onSubmit: OnSubmit = async ({ email, password, passwordConfirmation }, { setSubmitting }) => {
    if (passwordConfirmation === password) {
      await auth.createUserWithEmailAndPassword(email, password)

    }

    setSubmitting(false)
  }

  return (
    <SignUp
      onSubmit={onSubmit}
    />
  )
}
