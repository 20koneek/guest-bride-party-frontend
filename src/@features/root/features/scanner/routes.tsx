import React, { ReactElement } from 'react'
import { QrPage } from './pages'
import { BarcodePage } from './pages'

export enum Routes {
  QR = 'qr',
  Barcode = 'barcode',
}

export const scannerRoutes: ReactElement[] = [
  <QrPage key={Routes.QR} path={Routes.QR}/>,
  <BarcodePage key={Routes.Barcode} path={Routes.Barcode}/>,
]
