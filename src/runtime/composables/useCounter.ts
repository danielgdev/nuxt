import { useState } from '#app'

export const useCounter = () => {
  return useState('counter', (): Number => Math.round(Math.random() * 1000))
}