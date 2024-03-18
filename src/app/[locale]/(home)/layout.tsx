import { Footer } from '@/components/footer'
import { Header } from '@/modules/core'
import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { AUTH_TOKEN } from '@/modules/auth'
import { redirect } from 'next/navigation'

export default async function AppLayout({
  children,
  params,
}: { children: ReactNode } & UrlProps) {
  const isAuthenticated = cookies().has(AUTH_TOKEN)

  if (isAuthenticated) {
    redirect(`/${params?.locale as string}/login`)
  }
  return (
    <>
      <Header />
      <main className="container min-h-svh pt-10">{children}</main>
      <Footer />
    </>
  )
}
