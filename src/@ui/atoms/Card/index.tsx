import React, { FC } from 'react'
import classNames from 'classnames'
import { Card as CardUI, CardContent } from '@material-ui/core'
import styles from './styles.css'
import { Props } from './types'

export const Card: FC<Props> = ({ children, className }) => (
  <CardUI className={classNames(styles.main, className)}>
    <CardContent>
      {children}
    </CardContent>
  </CardUI>
)
