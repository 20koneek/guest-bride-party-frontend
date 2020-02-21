export function getOsEnv(key: string): string {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Environment variable ${key} is not set.`)
  }

  return process.env[key] as string
}

export function getOsEnvOrNull(key: string): string | null {
  if (typeof process.env[key] === 'undefined') {
    return null
  }

  return process.env[key] as string
}
