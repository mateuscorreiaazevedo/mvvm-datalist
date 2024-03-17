'use client'
import { Button } from '@/components'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export default function Home() {
  const t = useTranslations()
  const { setTheme, theme } = useTheme()
  const isLight = theme === 'light'

  const handleTheme = () => setTheme(isLight ? 'dark' : 'light')

  return (
    <>
      <Button onClick={handleTheme}>{t('common.title')}</Button>
      <h1>Hello</h1>
    </>
  )
}
