import { defineNuxtPlugin } from '#app'
import { useX0dadoAuth } from './composables/useX0dadoAuth'

export default defineNuxtPlugin(async () => {
  const { fetchUser } = useX0dadoAuth()

  await fetchUser()
})