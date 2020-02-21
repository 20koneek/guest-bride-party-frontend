import { ProductInput } from '../../../../../../../types/graphql.d'

export interface Props {
  onSubmit: (data: ProductInput) => void
  defaultValues: ProductInput
}

