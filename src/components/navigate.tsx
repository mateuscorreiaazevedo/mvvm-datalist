import { useLocale } from 'next-intl'
import Link from 'next/link'
import { ReactNode } from 'react'

type NavigateProps = {
  to: string
  children: ReactNode
  className?: string
}

export function Navigate({ children, to, className }: NavigateProps) {
  const locale = useLocale()

  const href = `/${locale}${to}`

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
