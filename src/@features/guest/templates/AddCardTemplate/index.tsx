import React, { FC } from 'react'
import { Props } from './types'
import { Button, Column } from '@ui'
import styles from './styles.css'
import { New } from '../New'

export const AddCardTemplate: FC<Props> = ({ addCard, skipCard }) => (
    <New>
        <Column className={styles.addCardTemplate}>
            <Button
                variant="contained"
                color="primary"
                {...addCard}
            >
                Добавить карту
            </Button>

            <Button
                variant="contained"
                color="primary"
                {...skipCard}
            >
                Пропустить
            </Button>
        </Column>
    </New>
)
