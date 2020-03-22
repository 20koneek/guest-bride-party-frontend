import { RouteComponentProps } from '@reach/router'
import { WithGuestProps } from '@hoc/withGuest/types'

export type Props = RouteComponentProps<{ weddingId: string }> & WithGuestProps
