import { useTranslations } from 'next-intl'

export const useTranslationsFooter = () => {
  const t = useTranslations('common.footer')

  return {
    powered: t('powered'),
    me: t('me'),
    copy: t('copy', { year: new Date().getFullYear().toString() }),
  }
}
