import { WithStyles } from '@material-ui/core'

export interface Props extends WithStyles<'circle' | Size> {
    color: string
    size?: Size
}
