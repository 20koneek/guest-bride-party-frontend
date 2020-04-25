import { withFirebase, withLoadGuest } from '@hoc'
import { Wedding } from './Wedding'

export const WeddingPage = withFirebase(withLoadGuest(Wedding))
