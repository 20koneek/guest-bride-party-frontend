import React, { FC } from 'react'
import { FormValues, Props } from './types'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LinearProgress } from '@material-ui/core'
import { Button, Column, TextFieldForm, PrimaryText } from '@ui'
import styles from './styles.css'
import { validationSchema } from '../../pages/NewGuest/validation'

export const NewGuestForm: FC<Props> = ({ onSubmit, defaultValues, loading }) => {
    const { control, handleSubmit } = useForm<FormValues>({
        defaultValues,
        resolver: yupResolver(validationSchema),
    })

    return (
        <form className={styles.newGuestForm} onSubmit={handleSubmit(onSubmit)}>
            <Column>
                <PrimaryText>Как Вас зовут?</PrimaryText>

                <TextFieldForm<FormValues>
                    label="Имя"
                    name="name"
                    autoComplete='off'
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
