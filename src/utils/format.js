
export const dateTimeFormat = (dateTime) => {
  if (dateTime !== null) {
    const input = new Date(dateTime)
    return (
      input.toLocaleDateString('id-ID', { month: 'short' }) + " " +
      input.toLocaleDateString('id-ID', { day: '2-digit' }) + ", " +
      input.toLocaleDateString('id-ID', { year: 'numeric' })
    )
  }
  return null
}

export const camelCaseFormat = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
    .replace(/([a-z])/, (match) => match.toUpperCase());
}