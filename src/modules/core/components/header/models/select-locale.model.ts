import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export const useDropdownSelectLocaleModel = () => {
  const t = useTranslations('common.header.nav.dropdownMenu.selectLocale')
  const router = useRouter()
  const pathName = usePathname()
  const locale = useLocale()

  const locales: Option[] = [
    {
      value: 'pt-br',
      label: t('label.pt-br'),
    },
    {
      value: 'en',
      label: t('label.en'),
    },
  ]

  function setLocale(value: string) {
    const url = pathName.replace(locale, value)

    router.replace(url)
  }

  return {
    title: t('title'),
    setLocale,
    locales,
  }
}
