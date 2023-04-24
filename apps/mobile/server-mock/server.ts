import { Server } from 'miragejs'
import routes from './routes'

const config = { routes }

export function startServer() {
  return new Server({
    ...config,
  })
}
