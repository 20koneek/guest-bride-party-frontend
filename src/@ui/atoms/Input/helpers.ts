import { getIn } from 'formik'
import { FieldToTextFieldProps } from './types'

export const fieldToTextFieldProps: FieldToTextFieldProps = ({
  field,
  form,
  variant = 'standard',
  disabled,
  ...props
}) => {
  const { name } = field
  const { touched, errors, isSubmitting } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return {
    ...props,
    ...field,
    variant,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: disabled !== undefined ? disabled : isSubmitting,
  }
}
