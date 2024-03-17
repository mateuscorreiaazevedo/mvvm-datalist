import { useTranslationsHeader } from '@/modules/core/hooks/use-translations-header'
import { LocaleEnum } from '@/modules/core/utils/enums/locales'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export const useDropdownSelectLocaleModel = () => {
  const { header } = useTranslationsHeader()
  const { label, title, icon } = header.nav.dropdownMenu.selectLocale

  const router = useRouter()
  const pathName = usePathname()
  const locale = useLocale()

  const locales: Option[] = [
    {
      value: LocaleEnum.PT_BR,
      label: label['pt-br'],
    },
    {
      value: LocaleEnum.EN,
      label: label.en,
    },
  ]

  function setLocale(value: string) {
    const url = pathName.replace(locale, value)

    router.replace(url)
  }

  return {
    constants: {
      title,
      icon,
    },
    setLocale,
    locales,
  }
}
