import { BaseTextFieldProps } from '@material-ui/core/TextField/TextField'
import { Control, FieldErrors, FieldValues } from 'react-hook-form'

export interface Props<T extends FieldValues> extends BaseTextFieldProps {
    name: Extract<keyof T, string>
    control: Control<T>
    errors: FieldErrors<T>
}
