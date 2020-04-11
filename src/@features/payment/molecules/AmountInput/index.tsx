import React, { FC } from 'react'
import { Props } from './types'
import { Card, CardContent, CardTab, CardTabs, Center, PrimaryText, Rub } from '@ui'

export const AmountInput: FC<Props> = ({ value, values, onChange }) => (
    <Card>
        <CardContent>
            <Center>
                <PrimaryText variant='h3'>
                    <Rub>{value}</Rub>
                </PrimaryText>
            </Center>
        </CardContent>

        <CardTabs value={value} onChange={(...params) => onChange?.(params[1])}>
            {values?.map((v) => (
                <CardTab
                    key={v}
                    value={v}
                    label={<Rub>{v}</Rub>}
                />
            ))}
        </CardTabs>
    </Card>
)
