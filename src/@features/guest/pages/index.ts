import { memo } from 'react'
import {
    withFirebase,
    withLoadGuest,
    withOutCard,
    withOutGuest,
} from '@hoc'
import { NewGuest } from './NewGuest'
import { NotAuth } from './NotAuth'

export const NewGuestPage = withFirebase(withLoadGuest(withOutCard(withOutGuest(NewGuest))))
export const NotAuthPage = withFirebase(withLoadGuest(withOutGuest(memo(NotAuth))))
