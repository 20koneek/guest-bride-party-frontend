import React, { FC } from 'react'
import { FormValues, Props } from './types'
import { useForm } from 'react-hook-form'
import { Button, Column, TextFieldForm, PrimaryText } from '@ui'
import { LinearProgress } from '@material-ui/core'
import styles from './styles.css'
import { validationSchema } from '../../pages/NewGuest/validation'

export const NewGuestForm: FC<Props> = ({ onSubmit, defaultValues, loading }) => {
    const { control, handleSubmit, errors } = useForm<FormValues>({ defaultValues, validationSchema })

    return (
        <form className={styles.newGuestForm} onSubmit={handleSubmit(onSubmit)}>
            <Column>
                <PrimaryText>Как Вас зовут?</PrimaryText>

                <TextFieldForm<FormValues>
                    label="Имя"
                    name="name"
                    autoComplete='off'
                    errors={errors}
                    control={control}
                />

                <Button
                    type='submit'
                    disabled={loading}
                >
                    Сохранить
                </Button>

                {loading && (
                    <LinearProgress/>
                )}
            </Column>
        </form>
    )
}
