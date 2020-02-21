import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'

const Common: FC<UseStyle> = ({ children, className }) => (
  <div className={classNames(className, styles.common)}>
    <div className={styles.content}>
      {children}
    </div>
  </div>
)

Common.displayName = 'Common'

export default Common
