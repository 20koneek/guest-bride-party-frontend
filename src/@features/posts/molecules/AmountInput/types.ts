export interface Props {
    name?: string
    disabled?: boolean
    value?: number
    values?: number[]
    onChange?: (value: number) => void
}
