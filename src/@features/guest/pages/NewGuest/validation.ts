import { object, string } from 'yup'
import { FormValues } from '../../molecules/NewGuestForm/types'

export const validationSchema = object().shape<FormValues>({
    name: string().required('Имя обязательно'),
})
