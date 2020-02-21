import React from 'react'
import styles from './styles.css'

export const Page: React.FC = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
)
