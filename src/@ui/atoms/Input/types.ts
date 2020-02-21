import { FieldProps } from 'formik'
import { TextFieldProps } from '@material-ui/core/TextField'

export type Props =
  UseStyle &
  FieldProps &
  Omit<TextFieldProps, 'error' | 'name' | 'onChange' | 'value'>

export type FieldToTextFieldProps = (props: Props) => TextFieldProps
