import { TextFieldProps } from '@material-ui/core/TextField'

export type Props = UseStyle & Omit<TextFieldProps, 'error' | 'onChange' | 'value'>
