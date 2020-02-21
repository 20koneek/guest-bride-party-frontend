import { auth, User } from 'firebase'
import 'firebase/auth'

export interface FirebaseContextProps {
  currentUser: User | null
  auth: auth.Auth
}
