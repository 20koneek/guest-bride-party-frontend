import React, { FC, memo } from 'react'
import { Props } from './types'
import { useProductUnitsQuery } from '../../hooks'
import { ProductUnitPreview } from '../../molecules/ProductUnitPreview'
import { Loading } from '../../../../../../@ui/atoms/Loading'
import { List } from '@material-ui/core'

export const ProductUnitsList: FC<Props> = memo<Props>(({ id }) => {
  const { data, loading, error } = useProductUnitsQuery(id)

  return (
    <Loading
      loading={loading}
      error={error}
    >
      <List disablePadding>
        {data?.productUnits.map(({ id, name }) => (
          <ProductUnitPreview
            key={id}
            id={id}
            name={name}
          />
        ))}
      </List>
    </Loading>
  )
})
