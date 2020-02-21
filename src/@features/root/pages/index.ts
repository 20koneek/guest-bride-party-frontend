import { withFirebase } from '@hoc/withFirebase'
import { RootPage as Root } from './RootPage'

export const RootPage = withFirebase(Root)
