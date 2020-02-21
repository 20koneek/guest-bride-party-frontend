import React from 'react'
import moment from  'moment'
import { Props } from './types'

export const Timestamp: React.FC<Props> = ({  timestamp}) => (
  <>
    {moment(timestamp).format("HH:mm DD:MM:YYYY")}
  </>
)
