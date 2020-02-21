import React, { FC } from 'react'
import { Form, Formik } from 'formik'
import { Typography } from '@material-ui/core'
import { withFirebase } from '@hoc/withFirebase'
import { Circle, InputField } from '@ui'
import { Props } from './types'
import Common from '../../../templates/Common'
import styles from './styles.css'
import { SignUnForm } from '../../types'

const initialValues: SignUnForm = {
  password: '',
  email: '',
  passwordConfirmation: '',
}

const SignUp: FC<Props> = ({ onSubmit }) => (
  <Common className={styles.backGround}>
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={() => (
        <Form>
          <Typography variant="h4">
            Регистрация
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

          <InputField
            name='passwordConfirmation'
            type='password'
            label='Повторите пароль'
          />

          <Circle
            type='submit'
            variant='extended'
            size="medium"
            color="primary"
            aria-label="add"
          >
            Войти
          </Circle>
        </Form>
      )}
    />
  </Common>
)

export default withFirebase(SignUp)
