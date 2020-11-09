import { RouteComponentProps } from '@reach/router'
import { WithLoadGuestProps } from '@hoc/withLoadGuest/types'

export type Props = RouteComponentProps<{ id: string }> & WithLoadGuestProps
