import { FirebaseContextProps } from '@lib/firebaseContext/types'
import { RouteComponentProps } from '@reach/router'

export interface PrivateDefaultProps {
  rc: any
}

export type PrivateProps = FirebaseContextProps & PrivateDefaultProps & RouteComponentProps
