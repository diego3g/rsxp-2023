import axios from 'axios'
import { BASE_URL } from '@env'
export const api = axios.create({
  baseURL: BASE_URL,
})
