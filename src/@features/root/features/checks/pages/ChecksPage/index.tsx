import React, { FC } from 'react'
import { Props } from './types'
import { useChecksQuery } from '../../hooks'
import { HeadContent } from '@ui/molecules/HeaderContent'
import { CheckPreview } from '../../molecules/CheckPreview'
import { List } from '@material-ui/core'

export const ChecksPage: FC<Props> = ({}) => {
  const { data, loading, error } = useChecksQuery()

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <HeadContent title='Чеки'>
      <List>
        {data?.checksPaginate.checks.map(({ id, name, dateTime, totalSum }) => (
          <CheckPreview
            key={id}
            id={id}
            name={name}
            dateTime={dateTime}
            totalSum={totalSum}
          />
        ))}
      </List>
    </HeadContent>
  )
}
