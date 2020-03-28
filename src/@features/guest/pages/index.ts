import { memo } from 'react'
import { NewGuest } from './NewGuest'
import { NotAuth } from './NotAuth'
import { withFirebase, withLoadGuest } from '@hoc'
import { withOutCard, withOutGuest } from '../hoc'
import { Guest } from './Guest'

export const GuestsPage = withFirebase(withLoadGuest(Guest))
export const NewGuestPage = withFirebase(withLoadGuest(withOutCard(withOutGuest(NewGuest))))
export const NotAuthPage = memo(NotAuth)
