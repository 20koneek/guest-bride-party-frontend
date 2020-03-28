import { memo } from 'react'
import { NewGuest } from './NewGuest'
import { NotAuth } from './NotAuth'
import { withFirebase, withLoadGuest } from '@hoc'
import { withOutCard, withOutGuest } from '../hoc'
import { Guests } from './Guests'

export const GuestsPage =  withFirebase(withLoadGuest(Guests))
export const NewGuestPage = withFirebase(withLoadGuest(withOutCard(withOutGuest(memo(NewGuest)))))
export const NotAuthPage = memo(NotAuth)
