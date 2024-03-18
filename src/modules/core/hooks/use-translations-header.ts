import { IconName } from '@/components/ui/icon'
import { useTranslations } from 'next-intl'

export const useTranslationsHeader = () => {
  const t = useTranslations('common.header')

  const header = {
    nav: {
      appTitle: {
        tag: {
          beta: t('nav.appTitle.tag.beta'),
          pro: t('nav.appTitle.tag.pro'),
        },
      },
      dropdownMenu: {
        selectTheme: {
          title: t('nav.dropdownMenu.selectTheme.title'),
          label: {
            dark: t('nav.dropdownMenu.selectTheme.label.dark'),
            light: t('nav.dropdownMenu.selectTheme.label.light'),
            system: t('nav.dropdownMenu.selectTheme.label.system'),
          },
          icon: {
            light: t('nav.dropdownMenu.selectTheme.icon.light') as IconName,
            dark: t('nav.dropdownMenu.selectTheme.icon.dark') as IconName,
          },
        },
        selectLocale: {
          title: t('nav.dropdownMenu.selectLocale.title'),
          icon: t('nav.dropdownMenu.selectLocale.icon') as IconName,
          label: {
            'pt-br': t('nav.dropdownMenu.selectLocale.label.pt-br'),
            en: t('nav.dropdownMenu.selectLocale.label.en'),
          },
        },
        logout: {
          label: t('nav.dropdownMenu.logout.label'),
          icon: t('nav.dropdownMenu.logout.icon') as IconName,
        },
      },
    },
    tabs: {
      links: {
        uploads: {
          label: t('tabs.links.uploads.label'),
          icon: t('tabs.links.uploads.icon') as IconName,
        },
        tags: {
          label: t('tabs.links.tags.label'),
          icon: t('tabs.links.tags.icon') as IconName,
        },
        settings: {
          label: t('tabs.links.settings.label'),
          icon: t('tabs.links.settings.icon') as IconName,
        },
        developers: {
          label: t('tabs.links.developers.label'),
          icon: t('tabs.links.developers.icon') as IconName,
        },
      },
    },
  }

  return { header }
}
