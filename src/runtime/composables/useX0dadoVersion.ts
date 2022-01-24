import { useRuntimeConfig } from '#app'

export const useStrapiVersion = (): string => {
  const config = useRuntimeConfig()
  return config.x0dado.version
}