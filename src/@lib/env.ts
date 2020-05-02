import { getOsEnv, getOsEnvOrNull } from './utils'

/**
 * Environment variables
 */
const measurementId = getOsEnvOrNull('APP_MEASUREMENT_ID')

export default {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    api: {
        schema: getOsEnv('APP_API_SCHEMA'),
        host: getOsEnvOrNull('APP_API_HOST'),
        port: getOsEnvOrNull('APP_API_PORT'),
        endpoint: getOsEnv('APP_API_ENDPOINT'),
        url: getOsEnvOrNull('APP_API_URL'),
    },
    firebase: {
        apiKey: getOsEnv('APP_API_KEY'),
        appId: getOsEnv('APP_ID'),
        authDomain: getOsEnv('APP_AUTH_DOMAIN'),
        databaseURL: getOsEnv('APP_FIREBASE_DATABASE_URL'),
        messagingSenderId: getOsEnv('APP_MESSAGING_SENDER_ID'),
        projectId: getOsEnv('APP_PROJECT_ID'),
        storageBucket: getOsEnv('APP_STORAGE_BUCKET'),
        ...(measurementId ? { measurementId } : {}),
    },
}
