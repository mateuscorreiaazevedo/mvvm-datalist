import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

const locales = ['pt-br']

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../../../i18n/${locale}`)).default,
  }
})
