export interface PaymentValues {
    amount: number
}

export interface Props {
    loading: boolean
    values: number[]
    onChange: (value: number) => void
}
