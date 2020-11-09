import React, { FC } from 'react'
import { Props } from './types'
import { New } from '../../templates'
import { NewGuestForm } from '../../molecules/NewGuestForm'
import { FormValues } from '../../molecules/NewGuestForm/types'
import { useCreateGuestMutation } from '../../hooks'

export const NewGuest: FC<Props> = ({ weddingId, navigate }) => {
    const [createGuest, mutation] = useCreateGuestMutation()

    const onSubmit = async (input: FormValues) => {
        if (weddingId) {
            await createGuest({
                variables: {
                    input: {
                        weddingId,
                        name: input.name,
                    },
                },
            }).then(() => navigate?.('/card/new'))
        }
    }

    return (
        <New>
            <NewGuestForm
                onSubmit={onSubmit}
                defaultValues={{ name: '' }}
                loading={mutation.loading}
            />
        </New>
    )
}
