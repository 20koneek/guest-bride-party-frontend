import { withGuest, withLoadGuest } from '@hoc'
import { Wedding } from './Wedding'
import { CurrentWedding } from './CurrentWedding'

export const WeddingPage = Wedding
export const CurrentWeddingPage = withLoadGuest(withGuest(CurrentWedding))
