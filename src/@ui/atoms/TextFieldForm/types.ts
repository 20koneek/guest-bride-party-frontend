import { BaseTextFieldProps } from '@material-ui/core/TextField/TextField'
import { Control, FieldName, FieldValues } from 'react-hook-form'

export interface Props<T extends FieldValues> extends BaseTextFieldProps {
    name: FieldName<T>
    control: Control
}
