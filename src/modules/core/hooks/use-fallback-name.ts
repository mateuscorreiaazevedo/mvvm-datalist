export const useFallbackName = (fullName: FullName) => {
  const hasString = typeof fullName === 'string'

  const firstName = hasString ? fullName.split(' ')[0] : fullName.firstName
  const lastName = hasString ? fullName.split(' ')[1] : fullName.lastName

  function getFirstLetterOfName(value: string) {
    return value.slice(0, 1)
  }

  const formatFirstName = getFirstLetterOfName(firstName).toUpperCase()
  const formatLastName = getFirstLetterOfName(lastName).toUpperCase()

  return `${formatFirstName}${formatLastName}`
}
