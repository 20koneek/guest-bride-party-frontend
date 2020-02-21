import React, { FC } from 'react'
import { Form, Formik } from 'formik'
import { Typography } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Circle, InputField } from '@ui'
import { Props } from './types'
import Common from '../../../templates/Common'
import styles from './styles.css'

export const SignIn: FC<Props> = ({ auth }) => (
  <Common className={styles.backGround}>
    <Formik
      onSubmit={async ({ email, password }: { email: string, password: string }, { setSubmitting }) => {
        auth.signInWithEmailAndPassword(email, password)
          .then(() => { })
          .catch((e) => {
            console.log(e)
          })
        setSubmitting(false)
      }}
      initialValues={{
        password: '',
        email: '',
      }}
      render={({ isSubmitting }) => (
        <Form>
          <Typography variant="h4">
            Aвторизация
          </Typography>

          <InputField
            name='email'
            label='Email'
            type='email'
          />

          <InputField
            name='password'
            type='password'
            label='Пароль'
          />

          <Circle
            type='submit'
            variant='extended'
            size="medium"
            color="primary"
            aria-label="add"
            disabled={isSubmitting}
          >
            Войти
          </Circle>

          {isSubmitting && (
            <LinearProgress style={{ margin: '10px 0' }}/>
          )}
        </Form>
      )}
    />
  </Common>
)
