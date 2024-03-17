'use client'

import { ReactNode } from 'react'
import { NavLinkView } from './views/index.view'
import { useNavLink } from './models/index.model'

type NavLinkProps = {
  to: string
  children: ReactNode
}
export function NavLink({ children, to }: NavLinkProps) {
  return <NavLinkView {...useNavLink(to)}>{children}</NavLinkView>
}
