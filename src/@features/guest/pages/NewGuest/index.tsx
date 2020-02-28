import React, { FC } from 'react'
import { Props } from './types'
import { New } from '../../templates'
import { NewGuestForm } from '../../molecules/NewGuestForm'
import { useCreateGuestMutation } from '../../hooks'
import { FormValues } from '../../molecules/NewGuestForm/types'

export const NewGuest: FC<Props> = ({ navigate }) => {
    const [createGuest, { loading }] = useCreateGuestMutation()
    const onSubmit = async (input: FormValues) => {
        await createGuest({ variables: { input } })
        await navigate?.(`/guest/add-card`)
    }

    return (
        <New>
            <NewGuestForm
                onSubmit={onSubmit}
                defaultValues={{ name: '' }}
                loading={loading}
            />
        </New>
    )
}
