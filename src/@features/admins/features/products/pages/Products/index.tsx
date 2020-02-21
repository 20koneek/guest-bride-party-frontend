import React, { FC, memo } from 'react'
import { List } from '@ui'
import { Props } from './types'
import { useCheckQuery } from '../../../../../root/features/checks/hooks'
import { HeadContent } from '../../../../../../@ui/molecules/HeaderContent'
import { CheckItem } from '../../../../../root/features/checks/molecules/CheckItem'

export const Products: FC<Props> = memo((props) => {
  const { data, loading, error } = useCheckQuery('')

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
})
