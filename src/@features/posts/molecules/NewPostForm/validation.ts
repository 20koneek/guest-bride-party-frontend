import { object, string } from 'yup'
import { FormValues } from './types'

export const validationSchema = object().shape<FormValues>({
    message: string().required('Поздравление обязательно'),
})
