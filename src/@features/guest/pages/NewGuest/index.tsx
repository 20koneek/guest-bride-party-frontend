import React, { FC, useEffect } from 'react'
import { Props } from './types'
import { New } from '../../templates'
import { NewGuestForm } from '../../molecules/NewGuestForm'
import { FormValues } from '../../molecules/NewGuestForm/types'
import { useCreateGuestMutation, useCurrentGuestQuery } from '../../hooks'

export const NewGuest: FC<Props> = ({ navigate, weddingId }) => {
    const { data, loading, error } = useCurrentGuestQuery()
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
            })

            await navigate?.(`/guest/add-card`)
        }
    }

    useEffect(() => {
        if (data?.currentGuest) {
            navigate?.('/guest')
        }
    }, [data, loading, error])

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
