import React, { FC, memo } from 'react'
import { Props } from './types'
import { HeadContent } from '@ui/molecules/HeaderContent'
import { ProductUnitsList } from '../../template'

export const ProductUnits: FC<Props> = memo<Props>((props) => (
  <HeadContent title='Группы товаров'>
    <ProductUnitsList/>
  </HeadContent>
))
