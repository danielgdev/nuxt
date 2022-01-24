import type { Ref } from 'vue'

export type X0dadoUser = object | null

export interface X0dadoAuthenticationResponse {
  user: Ref<X0dadoUser>
  jwt: string
}

export interface X0dadoAuthenticationData {
  identifier: string
  password: string
}

export interface X0dadoRegistrationData {
  username: string
  email: string
  password: string
  [field: string]: string | number | boolean | object | Array<string | number | boolean | object>
}