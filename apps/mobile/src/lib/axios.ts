import axios from 'axios'
import { BASE_URL } from '@env'

if (!BASE_URL) {
  throw Error('Invalid base URL.')
}

export const api = axios.create({
  baseURL: BASE_URL,
})
