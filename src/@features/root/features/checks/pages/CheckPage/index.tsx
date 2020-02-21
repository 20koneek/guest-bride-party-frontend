import React, { FC } from 'react'
import { Props } from './types'
import { useCheckQuery } from '../../hooks'
import { HeadContent } from '../../../../../../@ui/molecules/HeaderContent'
import { List } from '@material-ui/core'
import { CheckItem } from '../../molecules/CheckItem'

export const CheckPage: FC<Props> = ({ id }) => {
  const { data, loading, error } = useCheckQuery(id ?? '')

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <HeadContent title={data?.check?.name ?? ''}>
      <List>
        {data?.check?.checkProducts.map(({ id, name, quantity, sum, price }) => (
          <CheckItem
            key={id}
            id={id}
            name={name}
            quantity={quantity}
            price={price}
            sum={sum}
          />
        ))}
      </List>
    </HeadContent>
  )
}
