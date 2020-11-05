import { WithStyles } from '@material-ui/core'
import { Variant } from '@material-ui/core/styles/createTypography'
import { styles } from './styles'

export interface Props extends WithStyles<typeof styles> {
    title: string
    variant?: Variant
    color?:
        | 'initial'
        | 'inherit'
        | 'primary'
        | 'secondary'
        | 'textPrimary'
        | 'textSecondary'
        | 'error';
}

