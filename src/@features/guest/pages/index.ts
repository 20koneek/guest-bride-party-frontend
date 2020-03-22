import { memo } from 'react'
import { NewGuest } from './NewGuest'
import { AddCard } from './AddCard'
import { withFirebase, withGuest } from '@hoc'
import { withOutCard, withOutGuest } from '../hoc'

export const NewGuestPage = withFirebase(withGuest(withOutCard(withOutGuest(memo(NewGuest)))))
export const AddCardPage = withFirebase(withGuest(withOutCard(memo(AddCard))))
