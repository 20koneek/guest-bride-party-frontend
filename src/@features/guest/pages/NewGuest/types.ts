import { RouteComponentProps } from '@reach/router'
import { FirebaseContextProps } from '@lib/firebaseContext/types'

export type Props = RouteComponentProps<{ weddingId: string }> & FirebaseContextProps
