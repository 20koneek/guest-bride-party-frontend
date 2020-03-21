import { memo } from 'react'
import { NewGuest } from './NewGuest'
import { AddCard } from './AddCard'
import { withFirebase } from '@hoc'

export const NewGuestPage = withFirebase(NewGuest)
export const AddCardPage = memo(AddCard)
