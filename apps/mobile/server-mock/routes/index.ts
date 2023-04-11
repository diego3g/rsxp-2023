import { BASE_URL } from '@env'

export default function routes() {
  this.urlPrefix = `${BASE_URL}`
  this.namespace = ''

  this.get('users/diego3g', () => {
    return { login: 'mock-mirage' }
  })

  this.passthrough((request) => {
    return !request.url.includes(BASE_URL)
  })
}
