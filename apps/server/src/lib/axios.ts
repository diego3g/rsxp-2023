import axios from 'axios'

export const symplaApi = axios.create({
  baseURL: 'https://api.sympla.com.br/public/v3',
  headers: {
    S_TOKEN: process.env.SYMPLA_TOKEN,
  },
})
