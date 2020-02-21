import React, { memo } from 'react'
import { Props } from './types'
import { useRetailersQuery } from '../../hooks'
import { HeadContent } from '../../../../../../@ui/molecules/HeaderContent'
import { List } from '@material-ui/core'
import { RetailerPreview } from '../../molecules'
import { Loading } from '../../../../../../@ui/atoms/Loading'

export const Retailers = memo<Props>((props) => {
  const { data, loading, error } = useRetailersQuery()

  return (
    <Loading
      loading={loading}
      error={error}
    >
      <HeadContent title='Магазины'>
        <List>
          {data?.retailers.map(({ id, inn, name }) => (
            <RetailerPreview
              key={id}
              id={id}
              inn={inn}
              name={name}
            />
          ))}
        </List>
      </HeadContent>
    </Loading>
  )
})
