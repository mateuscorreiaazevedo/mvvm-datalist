import { GlobalProvider } from '@/modules/core'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '../../assets/styles/globals.css'

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
    <html
      lang={params?.locale}
      className="scrollbar-thin scrollbar-track-muted scrollbar-thumb-muted scrollbar-corner-muted"
    >
      <body
        className={`${inter.variable} min-h-screen w-full bg-background font-sans font-medium text-text transition-colors`}
      >
        <GlobalProvider locale={params?.locale}>{children}</GlobalProvider>
      </body>
    </html>
  )
}
