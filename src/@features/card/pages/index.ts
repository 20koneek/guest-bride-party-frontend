import { memo } from 'react'
import {
    withLoadGuest,
    withFirebase,
    withGuest,
    withOutCard,
} from '@hoc'
import { AddCard } from './AddCard'
import { UpdateCard } from './UpdateCard'

export const NewCardPage = withFirebase(withLoadGuest(withGuest(withOutCard(memo(AddCard)))))
export const UpdateCardPage = withFirebase(withLoadGuest(withGuest(withOutCard(memo(UpdateCard)))))
