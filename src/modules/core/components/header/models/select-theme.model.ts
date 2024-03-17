import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export const useDropdownSelectThemeModel = () => {
  const { setTheme } = useTheme()
  const t = useTranslations('common.header.nav.dropdownMenu.selectTheme')

  const themes: Option[] = [
    {
      value: 'light',
      label: t('label.light'),
    },
    {
      value: 'dark',
      label: t('label.dark'),
    },
    {
      value: 'system',
      label: t('label.system'),
    },
  ]

  return {
    themes,
    setTheme,
    title: t('title'),
  }
}
