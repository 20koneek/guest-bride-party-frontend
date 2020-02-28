import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'
import { Content } from '../../organisms'

export const Layout: FC<Props> = ({ children, className, auth, currentUser }) => (
  <div className={classNames(styles.layout, className)}>

    <Content>
      {children}
    </Content>

  </div>
)
