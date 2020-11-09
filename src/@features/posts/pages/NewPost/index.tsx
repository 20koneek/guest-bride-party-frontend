import React, { FC } from 'react'
import { Props } from './types'
import { useCreatePostMutation } from '../../hooks'
import { FormValues } from '../../molecules/NewPostForm/types'
import { NewPostForm } from '../../molecules/NewPostForm'

export const NewPost: FC<Props> = ({ navigate }) => {
    const [createPost, { loading }] = useCreatePostMutation()

    const onSubmit = async (input: FormValues) => {
        await createPost({
            variables: { input },
        }).then(() => navigate?.('/'))
    }

    return (
        <NewPostForm
            onSubmit={onSubmit}
            defaultValues={{ message: '' }}
            loading={loading}
        />
    )
}
