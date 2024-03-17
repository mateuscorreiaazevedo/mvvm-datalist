import { useTranslationsHeader } from '@/modules/core/hooks/use-translations-header'
import { NavigationLinksEnum } from '@/modules/core/utils/enums'

export function useHeaderTabs() {
  const { header } = useTranslationsHeader()
  const { developers, settings, tags, uploads } = header.tabs.links

  const links: Option[] = [
    {
      value: NavigationLinksEnum.ROOT,
      label: uploads.label,
      key: uploads.icon,
    },
    {
      value: NavigationLinksEnum.TAGS,
      label: tags.label,
      key: tags.icon,
    },
    {
      value: NavigationLinksEnum.SETTINGS,
      label: settings.label,
      key: settings.icon,
    },
    {
      value: NavigationLinksEnum.DEVELOPERS,
      label: developers.label,
      key: developers.icon,
    },
  ]

  return {
    links,
  }
}
