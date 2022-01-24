import { withDocus } from 'docus'

export default withDocus({
  rootDir: __dirname,
  buildModules: [
    'vue-plausible'
  ],
  plausible: {
    domain: 'nuxt.0xdado.net'
  },
  typescript: {
    shim: false,
    strict: true
  }
})