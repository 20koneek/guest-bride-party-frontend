import React, { FC } from 'react'
import { Props } from './types'
import styles from './styles.css'
import QrReader from 'react-qr-reader'
import { HeadContent } from '@ui/molecules/HeaderContent'

export const QrScanner: FC<Props> = ({ onQrScan }) => (
  <HeadContent title='Засканируйте чек'>
    <QrReader
      className={styles.qrScanner}
      delay={100}
      onError={console.log}
      onScan={(value) => value && onQrScan(value)}
    />
  </HeadContent>
)
