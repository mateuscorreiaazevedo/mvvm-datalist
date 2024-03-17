import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

export const metadata: Metadata = {
  title: 'Nivo - Uploads',
}

export default function Home() {
  const t = useTranslations()

  return (
    <>
      <h1>{t('common.title')}</h1>
    </>
  )
}
