import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'
import {
  FooterIconBlock,
  FooterIconCamera,
  FooterIconCameraBarcode,
  FooterIconList,
} from '../../atoms'
import { navigate } from '@reach/router'

export const Footer: FC<Props> = ({ className }) => (
  <footer className={classNames(styles.footer, className)}>
    <FooterIconBlock/>
    <FooterIconBlock/>
    <FooterIconCamera onClick={() => navigate('/scanner/qr')}/>
    <FooterIconCameraBarcode onClick={() => navigate('/scanner/barcode')}/>
    <FooterIconList onClick={() => navigate('/checks')}/>
  </footer>
)
