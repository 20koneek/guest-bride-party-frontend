import env from '../env'

let uri: string

uri = env.api.url || `${env.api.schema}://${env.api.host}`

if (env.api.port) {
    uri += `:${env.api.port}`
}

uri += env.api.endpoint

export const appUrl = env.api.url || uri
