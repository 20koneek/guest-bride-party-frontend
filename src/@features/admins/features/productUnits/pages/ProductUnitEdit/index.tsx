import React, { FC, memo } from 'react'
import { Props } from './types'
import { HeadContent } from '../../../../../../@ui/molecules/HeaderContent'
import { useProductQuery, useUpdateProductMutation } from '../../hooks'
import { ProductForm } from '../../molecules/ProductForm'
import { ProductInput } from '../../../../../../../types/graphql.d'
import { navigate } from '@reach/router'

export const ProductEdit: FC<Props> = memo<Props>(({ id }) => {
  const { data, loading, error } = useProductQuery(id ?? '')
  const [updateProduct] = useUpdateProductMutation()
  const { name } = { ...(data?.product ?? {}) }

  const onSubmit: (input: ProductInput) => void = async (input) => {
    await updateProduct({
      variables: { id: id ?? '', input },
    })
    await navigate(`/admins/products/${id}`)
  }

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <HeadContent title={data?.product?.name ?? ''}>
      {data?.product && (
        <ProductForm
          defaultValues={{
            name: name ?? '',
            netWeight: 0,
            product_unit_id: '',
          }}
          onSubmit={onSubmit}
        />
      )}
    </HeadContent>
  )
})
