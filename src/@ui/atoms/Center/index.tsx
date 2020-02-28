import React from 'react'
import styles from './styles.css'

export const Center: React.FC = ({ children }) => (
    <div className={styles.center}>
        {children}
    </div>
)
