import { ThemeProvider } from '@/modules/core'
import { Montserrat } from 'next/font/google'
import '../../assets/styles/globals.css'
import { ReactNode } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  fallback: ['sans serif'],
})

export const metadata = {
  title: 'Next setup',
  description: 'My boilerplate using Next.js 13. Powered by Mateus Azevedo',
}

type RootLayoutProps = UrlProps & {
  children: ReactNode
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params?.locale}>
      <body
        className={`${montserrat.variable} min-h-screen w-full bg-background font-medium text-primary`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
