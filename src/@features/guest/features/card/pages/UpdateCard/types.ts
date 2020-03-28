import { RouteComponentProps } from '@reach/router'
import { WithLoadGuestProps } from '@hoc/withGuest/types'
import { CardStatus } from '../../../../../../types/graphql.d'

export type Props = RouteComponentProps<{ cardStatus: CardStatus }> & WithLoadGuestProps
