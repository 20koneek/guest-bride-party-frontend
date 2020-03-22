import { ButtonProps } from '@material-ui/core'

type ButtonClick = Pick<ButtonProps, 'onClick' | 'disabled'>

export interface Props {
    guestName: string
    addCard: ButtonClick
    skipCard: ButtonClick
}
