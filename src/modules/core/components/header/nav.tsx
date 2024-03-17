import { logo } from '@/assets/images'
import { Navigate } from '@/components/navigate'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { NavDropdownMenu } from './dropdown-menu'

export function HeaderNav() {
  return (
    <nav className="flex items-center justify-between pb-4">
      <Navigate to="/" className="flex items-center justify-start gap-2">
        <Image alt="logo-nivo" src={logo} />
        <Badge className="rounded-full" variant={'secondary'}>
          Beta
        </Badge>
      </Navigate>
      <NavDropdownMenu />
    </nav>
  )
}
