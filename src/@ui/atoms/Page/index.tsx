import React from 'react'
import styles from './styles.css'
import { Container } from '@material-ui/core'

export const Page: React.FC = ({ children }) => (
    <Container className={styles.page}>
        <>
            {children}
        </>
    </Container>
)
