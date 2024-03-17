import { ThemeProvider, TranslateProvider } from '@/modules/core'
import '../../assets/styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  fallback: ['sans serif'],
})

export const metadata = {
  title: 'Data list',
  description: 'My App of data list using Next.js 14. Powered by Mateus Azevedo',
}

type RootLayoutProps = UrlProps & {
  children: ReactNode
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params?.locale}>
      <body
        className={`${inter.variable} min-h-screen w-full bg-background font-sans font-medium text-text transition-colors`}
      >
        <TranslateProvider locale={params?.locale as string}>
          <ThemeProvider>{children}</ThemeProvider>
        </TranslateProvider>
      </body>
    </html>
  )
}
