export async function getUser() {
  const result = await fetch('https://api.github.com/users/diego3g')
  return await result.json()
}
