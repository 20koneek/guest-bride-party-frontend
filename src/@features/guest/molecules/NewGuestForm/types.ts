export interface FormValues {
    name: string
}

export interface Props {
    onSubmit: (data: FormValues) => void
    defaultValues: FormValues
    loading: boolean
}
