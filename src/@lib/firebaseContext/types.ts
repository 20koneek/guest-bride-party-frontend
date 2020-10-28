import firebase from 'firebase'
import 'firebase/auth'

export interface FirebaseContextProps {
    currentUser: firebase.User | null
    auth: firebase.auth.Auth
}
