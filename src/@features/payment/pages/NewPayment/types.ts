import { RouteComponentProps } from '@reach/router'
import { WithLoadGuestProps } from '@hoc/withLoadGuest/types'

export type Props = RouteComponentProps<{ conditionId: string }> & WithLoadGuestProps
