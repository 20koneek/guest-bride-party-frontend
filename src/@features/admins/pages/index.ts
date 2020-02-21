import { Admin } from './Admin'
import { withFirebase, withUserRoute } from '@hoc'

export const AdminPage = withFirebase(withUserRoute(Admin))
