import { NextIntlClientProvider, useMessages } from 'next-intl'
import { ReactNode } from 'react'

export function TranslateProvider({
  children,
  locale,
}: {
  children: ReactNode
  locale: string
}) {
  const messages = useMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
