/* eslint-disable camelcase */

import type { Ref } from 'vue'
import type {
  X0dadoUser,
  X0dadoAuthenticationData,
  X0dadoRegistrationData,
  X0dadoAuthenticationResponse
} from '../types'
import { useX0dadoToken } from "./useX0dadoToken"
import { useX0dadoUser } from './useX0dadoUser'

export const useX0dadoAuth = () => {
  const token = useX0dadoToken()
  const user = useX0dadoUser()

  const setToken = (value: string | null) => {
    token.value = value
  }

  const setUser = (value: X0dadoUser) => {
    user.value = value
  }

  const fetchUser = async (): Promise<Ref<X0dadoUser>> => {
    if (!user.value) {
      try {
        user.value = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              identifier: 'x0dado',
              name: "User",
              email: "user@x0dado.net"
            })
          }, 2000)
        })
      } catch (e) {
        setToken(null)
      }
    }

    return user
  }

  /**
   * Authenticate user & retrieve his JWT
   *
   * @param  {X0dadoAuthenticationData} data - User authentication form: `identifier`, `password`
   * @param  {string} data.identifier - The email or username of the user
   * @param  {string} data.password - The password of the user
   * @returns Promise<StrapiAuthenticationResponse>
   */
  const login = async (data: X0dadoAuthenticationData): Promise<X0dadoAuthenticationResponse> => {
    setToken(null)

    const { jwt }: X0dadoAuthenticationResponse = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          user: {
            identifier: 'x0dado',
            name: "User",
            email: "user@x0dado.net"
          },
          jwt: 'jwt.jwt'
        })
      }, 1000)
    })

    setToken(jwt)

    const user = await fetchUser()

    return {
      user,
      jwt
    }
  }

  /**
   * Logout by removing authentication token
   *
   * @returns void
   */
  const logout = (): void => {
    setToken(null)
    setUser(null)
  }

  /**
   * Register a new user & retrieve JWT
   *
   * @param  {X0dadoRegistrationData} data - New user registration form: `username`, `email`, `password`
   * @param  {string} data.username - Username of the new user
   * @param  {string} data.email - Email of the new user
   * @param  {string} data.password - Password of the new user
   * @returns Promise<StrapiAuthenticationResponse>
   */
  const register = async (data: X0dadoRegistrationData): Promise<X0dadoAuthenticationResponse> => {
    setToken(null)

    const { jwt }: X0dadoAuthenticationResponse = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          user: {
            identifier: 'x0dado',
            name: "User",
            email: "user@x0dado.net"
          },
          jwt: 'jwt.jwt'
        })
      }, 1000)
    })

    setToken(jwt)

    const user = await fetchUser()

    return {
      user,
      jwt
    }
  }

  return {
    setToken,
    setUser,
    fetchUser,
    login,
    logout,
    register,
  }
}