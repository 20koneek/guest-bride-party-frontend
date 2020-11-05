import { memo } from 'react'
import { NewGuest } from './NewGuest'
import { NotAuth } from './NotAuth'
import { withFirebase, withLoadGuest } from '@hoc'
import { withOutGuest } from '../hoc'
import { withOutCard } from '../features/card/hoc/withOutCard'

export const NewGuestPage = withFirebase(withLoadGuest(withOutCard(withOutGuest(NewGuest))))
export const NotAuthPage = memo(NotAuth)
