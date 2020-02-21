import React, { FC } from 'react'
import classNames from 'classnames'
import { List as ListUI } from '@material-ui/core'
import styles from './styles.css'
import { Props } from './types'

export const List: FC<Props> = ({ children, className }) => (
  <ListUI className={classNames(styles.content, className)}>
    {children}
  </ListUI>
)

export default List
