import { api } from '@/lib/axios'

export async function getUser() {
  const { data } = await api.get('users/diego3g')
  return data
}
