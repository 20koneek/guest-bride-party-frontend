import env from '../env'

let apiUrl: string

apiUrl = env.api.url || `${env.api.schema}://${env.api.host}`

if (env.api.port) {
  apiUrl += `:${env.api.port}`
}

apiUrl += env.api.endpoint

export default apiUrl
