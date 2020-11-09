import { Wedding } from 'types/graphql.d'

export interface Props {
    wedding: Pick<Wedding, 'id' | 'title'>
}

