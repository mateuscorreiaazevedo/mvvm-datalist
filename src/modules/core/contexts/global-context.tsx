import { ReactNode } from 'react'
import { TranslateProvider } from './translate-context'
import { ThemeProvider } from './theme-context'

type Props = {
  children: ReactNode
  locale?: string
}

export const GlobalProvider = ({ children, locale }: Props) => {
  return (
    <TranslateProvider locale={locale as string}>
      <ThemeProvider>{children}</ThemeProvider>
    </TranslateProvider>
  )
}
