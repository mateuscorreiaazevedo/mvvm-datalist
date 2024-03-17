import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export function useNavLink(to: string) {
  const locale = useLocale()
  const path = usePathname()

  const activeVariant = useMemo(() => {
    const rootPath = `/${locale}`
    const isRoot = to === '/' ? rootPath : `${rootPath}${to}`

    return path === isRoot
  }, [locale, path, to])

  return {
    activeVariant,
    to,
  }
}
