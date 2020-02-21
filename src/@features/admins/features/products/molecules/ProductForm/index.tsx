import React, { FC } from 'react'
import { Props } from './types'
import { Controller, useForm } from 'react-hook-form'
import { Button, TextField } from '@material-ui/core'
import { ProductInput } from '../../../../../../../types/graphql.d'
import { Column } from '@ui'

export const ProductForm: FC<Props> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit } = useForm<ProductInput>({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Column>
        <Controller
          as={<TextField/>}
          label="Название"
          name="name"
          control={control}
          defaultValue=''
        />

        <Controller
          as={<TextField/>}
          label="NetWeight"
          name="netWeight"
          type='number'
          control={control}
          defaultValue=''
        />

        <Button type='submit'>Сохранить</Button>
      </Column>
    </form>
  )
}
