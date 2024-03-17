import { Footer } from '@/components/footer'
import { Header } from '@/modules/core'
import { ReactNode } from 'react'

export default async function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="container min-h-svh pt-10">{children}</main>
      <Footer />
    </>
  )
}
