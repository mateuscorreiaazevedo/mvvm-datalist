import { ReactNode } from 'react'
import { useNavLink } from '../models/index.model'

export type NavLinkViewProps = ReturnType<typeof useNavLink> & {
  children: ReactNode
}
