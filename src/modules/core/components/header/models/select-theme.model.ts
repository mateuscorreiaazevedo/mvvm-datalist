import { useTranslationsHeader } from '@/modules/core/hooks/use-translations-header'
import { ThemeEnum } from '@/modules/core/utils/enums'
import { useTheme } from 'next-themes'

export const useDropdownSelectThemeModel = () => {
  const { setTheme } = useTheme()
  const { header } = useTranslationsHeader()
  const { label, title, icon } = header.nav.dropdownMenu.selectTheme

  const themes: Option[] = [
    {
      value: ThemeEnum.LIGHT,
      label: label.light,
    },
    {
      value: ThemeEnum.DARK,
      label: label.dark,
    },
    {
      value: ThemeEnum.SYSTEM,
      label: label.system,
    },
  ]

  return {
    themes,
    setTheme,
    title,
    icon,
  }
}
