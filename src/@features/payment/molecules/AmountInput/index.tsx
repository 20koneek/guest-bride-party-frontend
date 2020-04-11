import React, { FC } from 'react'
import { Props } from './types'
import { Card, CardContent, CardTab, CardTabs, Center, Rub } from '@ui'
import { Typography } from '@material-ui/core'

export const AmountInput: FC<Props> = ({ value, values, onChange, disabled }) => (
    <Card>
        <CardContent>
            <Center>
                <Typography variant="h4" color='primary'>
                    <Rub>{value}</Rub>
                </Typography>
            </Center>
        </CardContent>

        <CardTabs
            value={value}
            onChange={(...params) => onChange?.(params[1])}
        >
            {values?.map((v) => (
                <CardTab
                    key={v}
                    value={v}
                    disabled={disabled}
                    label={<Rub>{v}</Rub>}
                />
            ))}
        </CardTabs>
    </Card>
)
