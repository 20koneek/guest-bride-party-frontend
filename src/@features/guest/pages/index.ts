import { memo } from 'react'
import { NewGuest } from './NewGuest'
import { AddCard } from './AddCard'
import { UpdateCard } from './UpdateCard'
import { NotAuth } from './NotAuth'
import { withFirebase, withLoadGuest } from '@hoc'
import { withGuest, withOutCard, withOutGuest } from '../hoc'

export const NewGuestPage = withFirebase(withLoadGuest(withOutCard(withOutGuest(memo(NewGuest)))))
export const AddCardPage = withFirebase(withLoadGuest(withGuest(withOutCard(memo(AddCard)))))
export const UpdateCardPage = withFirebase(withLoadGuest(withGuest(withOutCard(memo(UpdateCard)))))
export const NotAuthPage = memo(NotAuth)
