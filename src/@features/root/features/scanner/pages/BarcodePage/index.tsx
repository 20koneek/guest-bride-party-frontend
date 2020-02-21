import React, { FC, useCallback } from 'react'
import { Props } from './types'
import { BarcodeScanner } from '../../organisms/BarcodeScanner'
import { navigate } from '@reach/router'
import { useProductByBarcodeMutation } from '../../hooks'

export const BarcodePage: FC<Props> = ({}) => {
  const [addTo, { data }] = useProductByBarcodeMutation()
  console.log(data)
  const onFindCode = useCallback((code: string) => {
    if (code) {
      addTo({
        variables: {
          barcode: code,
        },
      })
        .then(() => navigate('/admins/products-barcode'))
        .catch((e) => alert(e))
    }
  }, [])

  return (
    <BarcodeScanner onFindCode={onFindCode}/>
  )
}
