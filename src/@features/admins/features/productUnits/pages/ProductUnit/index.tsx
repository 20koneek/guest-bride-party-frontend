import React, { FC, memo } from 'react'
import { Props } from './types'
import { HeadContent } from '@ui/molecules/HeaderContent'
import { useProductQuery } from '../../hooks'
import { Button } from '@ui/atoms/Button'
import { navigate } from '@reach/router'

export const Product: FC<Props> = memo(({ id }) => {
  const { data, loading, error } = useProductQuery(id ?? '')

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <HeadContent title={data?.product?.name ?? ''}>
      product <Button onClick={() => navigate(`${id}/edit`)}>Редактировать</Button>
    </HeadContent>
  )
})
