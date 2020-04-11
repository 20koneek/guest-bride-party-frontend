export interface PaymentValues {
    amount: number
}

export interface Props {
    values: number[]
    onChange: (value: number) => void
}
