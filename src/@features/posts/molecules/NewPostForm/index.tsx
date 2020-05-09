import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { LinearProgress } from '@material-ui/core'
import { Button, Column, TextFieldForm } from '@ui'
import styles from './styles.css'
import { FormValues, Props } from './types'
import { validationSchema } from './validation'

export const NewPostForm: FC<Props> = ({ onSubmit, defaultValues, loading }) => {
    const { control, handleSubmit, errors } = useForm<FormValues>({ defaultValues, validationSchema })

    return (
        <form className={styles.newGuestForm} onSubmit={handleSubmit(onSubmit)}>
            <Column>
                <TextFieldForm<FormValues>
                    multiline
                    label="Поздравление"
                    name="message"
                    autoComplete='off'
                    errors={errors}
                    control={control}
                />

                <Button
                    type='submit'
                    disabled={loading}
                >
                    Отправить
                </Button>

                {loading && (
                    <LinearProgress/>
                )}
            </Column>
        </form>
    )
}
