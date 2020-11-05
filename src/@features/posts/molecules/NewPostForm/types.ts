export interface FormValues {
    message: string
}

export interface Props {
    onSubmit: (data: FormValues) => void
    defaultValues: FormValues
    loading: boolean
}
