import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './styles.css'
import { Props } from './types'
import { Typography } from '@material-ui/core'

export const HeadContent: FC<Props> = ({ className, children, title }) => (
  <section className={classNames(styles.headContent, className)}>
    <Typography variant="h4" component="h4">
      {title}
    </Typography>

    <div className={styles.scrollbar}>
      {children}
    </div>
  </section>
)
