import React, { FC } from 'react'
import styles from './styles.css'
import classNames from 'classnames'
import {
    CardActions as CardActionsUI,
    CardContent as CardContentUI,
    CardContentProps,
    CardActionsProps,
    Tabs as TabsUI,
    TabsProps,
    Tab,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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

const Tabs: FC<TabsProps> = ({ children, ...props }) => (
    <TabsUI
        {...props}
        orientation='vertical'
    >
        {children}
    </TabsUI>
)

export const CardTabs = withStyles(() => ({
    root: {
        gridArea: 'tabs',
    },
    flexContainer: {
        display: 'grid',
        gridGap: 1,
        '&>button:first-child': {
            borderTopRightRadius: 16,
        },
        '&>button:last-child': {
            borderBottomRightRadius: 16,
        },
    },
    scroller: {
        borderRadius: '0 16px 16px 0',
    },
    indicator: {
        backgroundColor: 'transparent',
    },
}))(Tabs)

export const CardTab = withStyles(({ palette }) => ({
    root: {
        backgroundColor: `${palette.primary.main}1a`,
        color: palette.primary.main,
        opacity: '1',
    },
    selected: {
        boxShadow: `0 0px 8px 0px ${palette.primary.main}80`,
        backgroundColor: palette.primary.main,
        color: 'white',
        opacity: '1',
    },
}))(Tab)
