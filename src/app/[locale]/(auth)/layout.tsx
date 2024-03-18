import { AUTH_TOKEN } from '@/modules/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
} & UrlProps

export default function AuthLayout({ children, params }: Props) {
  const isAuthenticated = cookies().has(AUTH_TOKEN)

  if (!isAuthenticated) {
    redirect(`/${params?.locale as string}`)
  }

  return <div>{children}</div>
}
