import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { ListItemTypeMap } from '@material-ui/core/ListItem/ListItem'
import { ExtendButtonBase, WithStyles } from '@material-ui/core'

export type Props =
    OverridableComponent<ListItemTypeMap<{ button?: false }, 'li'>>
    & ExtendButtonBase<ListItemTypeMap<{ button: true }, 'div'>>
    & WithStyles<'secondaryAction'>
