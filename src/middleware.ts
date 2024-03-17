import createMiddleware from 'next-intl/middleware'
import { LocaleEnum } from './modules/core'

export default createMiddleware({
  locales: [LocaleEnum.PT_BR, LocaleEnum.EN],

  defaultLocale: LocaleEnum.PT_BR,
})

export const config = {
  matcher: ['/', '/(pt-br|en)/:path*'],
}
