import { startServer } from './server'

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  if (window.server) {
    // @ts-ignore
    window.server.shutdown()
  }

  // @ts-ignore
  window.server = startServer()
}
