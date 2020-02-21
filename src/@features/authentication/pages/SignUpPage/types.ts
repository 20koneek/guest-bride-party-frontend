import { RouteComponentProps } from '@reach/router'
import { FirebaseContextProps } from '@lib/firebaseContext/types'
import { SignUnForm } from '../types'
import { FormikHelpers } from 'formik'

export type Props = FirebaseContextProps & RouteComponentProps
export type OnSubmit = (values: SignUnForm, actions: FormikHelpers<SignUnForm>) => void
