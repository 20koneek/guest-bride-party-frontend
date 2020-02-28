import React, { createContext, FC, useEffect, useState } from 'react'
import { initializeApp, User } from 'firebase/app'
import 'firebase/auth'
import { FirebaseContextProps } from './types'
import { Loading } from './Loading'
import env from '../env'

const app = initializeApp(env.firebase)
export const auth = app.auth()

const defaultContext: FirebaseContextProps = { auth, currentUser: null }

export const FirebaseContext = createContext<FirebaseContextProps>(defaultContext)

export const FirebaseProvider: FC = ({ children }) => {
    const [loaded, setLoaded] = useState(false)
    const [currentUser, setCurrentUser] = useState<User | null>(() => auth.currentUser)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user)
            setLoaded(true)
        })

        auth.signInAnonymously()

        return unsubscribe
    }, [])

    return (
        <FirebaseContext.Provider value={{ auth, currentUser }}>
            {loaded ? (
                children
            ) : (
                <Loading/>
            )}
        </FirebaseContext.Provider>
    )
}
