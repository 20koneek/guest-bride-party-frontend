import React, { FC } from 'react'
import styles from './styles.css'
import classNames from 'classnames'
import {
    CardActions as CardActionsUI,
    CardContent as CardContentUI,
    CardContentProps,
    CardActionsProps,
} from '@material-ui/core'

export const Card: FC<UseStyle> = ({ children, className }) => (
    <div className={classNames(styles.card, className)}>
        {children}
    </div>
)

export const CardContent: FC<CardContentProps> = ({ className, ...props }) => (
    <CardContentUI
        {...props}
        className={classNames(styles.cardContent, className)}
    />
)

export const CardActions: FC<CardActionsProps> = ({ className, ...props }) => (
    <CardActionsUI
        {...props}
        className={classNames(styles.cardActions, className)}
    />
)
