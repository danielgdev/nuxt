import { useCookie, useNuxtApp, useRuntimeConfig } from '#app'

export const useX0dadoToken = () => {
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()

  nuxtApp._cookies = nuxtApp._cookies || {}
  if (nuxtApp._cookies.x0dado_jwt) {
    return nuxtApp._cookies.x0dado_jwt
  }

  const cookie = useCookie<string | null>('x0dado_jwt', config.x0dado.cookie)
  nuxtApp._cookies.x0dado_jwt = cookie
  return cookie
}