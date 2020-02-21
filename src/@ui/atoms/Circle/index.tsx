import React, { FC } from 'react'
import classNames from 'classnames'
import Fab, { FabProps } from '@material-ui/core/Fab'
import styles from './styles.css'

export const Circle: FC<FabProps> = ({ className, children, ...props }) => (
  <Fab
    {...props}
    className={classNames(styles.main, className)}
  >
    {children}
  </Fab>
)
