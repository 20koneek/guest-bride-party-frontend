import React, { FC } from 'react'
import { Props } from './types'
import { Button, Column, PrimaryText } from '@ui'
import styles from './styles.css'
import { New } from '../New'

export const AddCardTemplate: FC<Props> = ({ guestName, addCard, skipCard }) => (
    <New>
        <Column className={styles.addCardTemplate}>
            <PrimaryText>Привет {guestName}, Вы можете добавить карту сейча для удобной оплаты.</PrimaryText>

            <Button
                variant="contained"
                color="primary"
                {...addCard}
            >
                Добавить карту
            </Button>

            <Button {...skipCard}>
                Пропустить
            </Button>
        </Column>
    </New>
)
