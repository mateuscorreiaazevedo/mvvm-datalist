import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { LocaleEnum } from '../utils/enums'

const locales = [LocaleEnum.PT_BR, LocaleEnum.EN]

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../../../i18n/${locale}`)).default,
  }
})
