import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'
import { Content, Head, Menu } from '../../organisms'
import { Footer } from '../../molecules'

export const Layout: FC<Props> = ({ children, className, auth, currentUser }) => (
  <div className={classNames(styles.layout, className)}>
    <Head
      className={styles.isDesktop}
      auth={auth}
      currentUser={currentUser}
    />

    <Menu className={styles.isDesktop}/>

    <Content>
      {children}
    </Content>

    <Footer className={styles.isMobile}/>
  </div>
)
