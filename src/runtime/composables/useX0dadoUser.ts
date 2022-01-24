import type { Ref } from 'vue'
import type { X0dadoUser } from '../types'
import { useState } from '#app'

export const useX0dadoUser = (): Ref<X0dadoUser> => useState<X0dadoUser>('x0dado_user')