import React from 'react'
import { Props } from './types'

export const Price: React.FC<Props> = ({ value, hideCurrency }) => (
  <>
    {(value / 100).toLocaleString() + (hideCurrency ? '' : ' \u20bd')}
  </>
)
