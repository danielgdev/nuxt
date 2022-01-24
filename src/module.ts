import defu from 'defu'
import { resolve } from 'pathe'
import { defineNuxtModule, addPlugin } from '@nuxt/kit'

export interface ModuleOptions {
  /**
   * Strapi API URL
   * @default process.env.STRAPI_URL
   * @example 'http://localhost:1337'
   * @type string
   */
  url?: string

  /**
  * Strapi Prefix
  * @default '/api'
  * @type string
  */
  prefix?: string

  /**
   * Strapi Version
   * @default 'v4'
   * @type string
   * @example 'v3'
   */
  version?: 'v4' | 'v3'
}


export default defineNuxtModule({
  meta: {
    name: '@x0dado/nuxt',
    configKey: 'x0dado',
    compatibility: {
      nuxt: '^3.0.0',
      bridge: true
    }
  },
  defaults: {
    url: process.env.X0DADO_URL || 'http://localhost:1337',
    prefix: '/sso',
    version: 'v4'
  },
  setup(options, nuxt) {

    // Default runtimeConfig
    nuxt.options.publicRuntimeConfig.x0dado = defu(nuxt.options.publicRuntimeConfig.x0dado, {
      url: options.url,
      prefix: options.prefix,
      version: options.version
    })

    // Transpile runtime
    const runtimeDir = resolve(__dirname, './runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    // Add plugin to load user before bootstrap
    addPlugin(resolve(runtimeDir, 'x0dado.plugin'))

    // Add x0dado composables
    nuxt.hook('autoImports:dirs', (dirs) => {
      dirs.push(resolve(runtimeDir, 'composables'))
    })
  }
})

declare module '@nuxt/schema' {
  interface ConfigSchema {
    publicRuntimeConfig?: {
      x0dado?: ModuleOptions
    }
  }
}