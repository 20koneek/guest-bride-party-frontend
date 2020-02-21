import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'

export const Content: FC<Props> = ({ children, className }) => (
  <div className={classNames(styles.content, className)}>
    {children}
  </div>
)

export default Content
