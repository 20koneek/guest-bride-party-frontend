import React, { FC, useEffect, useState } from 'react'
import { navigate } from '@reach/router'
import { Props } from './types'
import { QrScanner } from '../../organisms/QrScanner'
import { useCreateCheckMutation } from '../../hooks'

export const QrPage: FC<Props> = ({ children }) => {
  const [addTo, { loading }] = useCreateCheckMutation()
  const [state, setState] = useState<string>(() => '')

  const parseBarcode = (textQR: string) => {
    const [t, s, fn, i, fp, n] = textQR
      .replace('t=', '')
      .replace('&s=', '|')
      .replace('&fn=', '|')
      .replace('&i=', '|')
      .replace('&fp=', '|')
      .replace('&n=', '|')
      .split('|')
    return { t, s, fn, i, fp, n }
  }

  useEffect(() => {
    if (state) {
      addTo({
        variables: {
          checkInput: parseBarcode(state),
        },
      })
        .then(() => navigate('/checks'))
        .catch((e) => alert(e))
    }
  }, [state])

  return loading ? (
    <div>Отправка...</div>
  ) : (
    <QrScanner onQrScan={setState}/>
  )
}
