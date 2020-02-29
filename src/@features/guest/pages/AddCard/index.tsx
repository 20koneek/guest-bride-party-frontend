import React, { FC } from 'react'
import { Props } from './types'
import { New } from '../../templates'
import { useAddCardMutation } from '../../hooks'
import { Button } from '@material-ui/core'

export const AddCard: FC<Props> = () => {
    const [createGuest, { loading }] = useAddCardMutation()

    const onClick = async () => {
        const response = await createGuest()
        const url = response?.data?.addCard

        if (url) {
            document.location.href = url
        }
    }

    return (
        <New>
            <Button
                variant="contained"
                color="primary"
                disabled={loading}
                onClick={onClick}
            >
                Добавить карту
            </Button>
        </New>
    )
}
