import React, { FC, memo } from 'react'
import { Props } from './types'
import { HeadContent } from '../../../../../../@ui/molecules/HeaderContent'
import { useRetailerQuery } from '../../hooks'

export const Retailer: FC<Props> = memo(({ id }) => {
  const { data, loading, error } = useRetailerQuery(id ?? '')

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <HeadContent title={data?.retailer?.name ?? ''}>
      {data?.retailer?.inn}
    </HeadContent>
  )
})
