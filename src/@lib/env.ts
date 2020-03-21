import { getOsEnv, getOsEnvOrNull } from './utils'

/**
 * Environment variables
 */
const measurementId = getOsEnvOrNull('REACT_APP_MEASUREMENT_ID')

export default {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    api: {
        schema: getOsEnv('REACT_APP_API_SCHEMA'),
        host: getOsEnvOrNull('REACT_APP_API_HOST'),
        port: getOsEnvOrNull('REACT_APP_API_PORT'),
        endpoint: getOsEnv('REACT_APP_API_ENDPOINT'),
        url: getOsEnvOrNull('REACT_APP_API_URL'),
    },
    firebase: {
        apiKey: getOsEnv('REACT_APP_API_KEY'),
        appId: getOsEnv('REACT_APP_ID'),
        authDomain: getOsEnv('REACT_APP_AUTH_DOMAIN'),
        databaseURL: getOsEnv('REACT_APP_FIREBASE_DATABASE_URL'),
        messagingSenderId: getOsEnv('REACT_APP_MESSAGING_SENDER_ID'),
        projectId: getOsEnv('REACT_APP_PROJECT_ID'),
        storageBucket: getOsEnv('REACT_APP_STORAGE_BUCKET'),
        ...(measurementId ? { measurementId } : {}),
    },
}
