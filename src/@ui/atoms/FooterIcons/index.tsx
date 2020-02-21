import React, { FC } from 'react'
import styles from './styles.css'
import { Props } from './types'
import { Block, Camera, Reorder } from '@material-ui/icons'

export const FooterIconBlock: FC<Props> = ({ onClick }) => (
  <Block
    color="primary"
    fontSize='large'
    onClick={onClick}
  />
)

export const FooterIconCameraBarcode: FC<Props> = ({ onClick }) => (
  <Camera
    color="primary"
    fontSize='large'
    onClick={onClick}
  />
)

export const FooterIconCamera: FC<Props> = ({ onClick }) => (
  <Camera
    className={styles.centerIcon}
    color="primary"
    onClick={onClick}
  />
)

export const FooterIconList: FC<Props> = ({ onClick }) => (
  <Reorder
    color="primary"
    fontSize='large'
    onClick={onClick}
  />
)
