import firebase from 'firebase/app'
import 'firebase/auth'

export interface FirebaseContextProps {
    currentUser: firebase.User | null
    auth: firebase.auth.Auth
}
