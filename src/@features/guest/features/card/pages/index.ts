import { AddCard } from './AddCard'
import { withLoadGuest, withFirebase } from '@hoc'
import { withGuest } from '../../../hoc/withGuest'
import { UpdateCard } from './UpdateCard'
import { memo } from 'react'
import { withOutCard } from '../../../hoc/withOutCard'

export const NewCardPage = withFirebase(withLoadGuest(withOutCard(memo(AddCard))))
export const UpdateCardPage = withLoadGuest(withGuest(withOutCard(memo(UpdateCard))))
