export async function fetcher(url) {
  const response = await fetch(url)
  const payload = await response.json()

  if (!response.ok || !payload.success) {
    throw new Error(payload.message || 'Request gagal')
  }

  return payload
}
