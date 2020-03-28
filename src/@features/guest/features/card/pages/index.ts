import { memo } from 'react'
import { withFirebase, withLoadGuest } from '@hoc'
import { AddCard } from './AddCard'
import { UpdateCard } from './UpdateCard'
import { withOutCard } from '../hoc'
import { withGuest } from '../../../hoc/withGuest'

export const AddCardPage = withFirebase(withLoadGuest(withGuest(AddCard)))
export const UpdateCardPage = withLoadGuest(withGuest(withOutCard(memo(UpdateCard))))
