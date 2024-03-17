import { Navigate } from '@/components/navigate'
import { NavLinkViewProps } from '../types/index.types'
import clsx from 'clsx'

export function NavLinkView({ activeVariant, to, children }: NavLinkViewProps) {
  const navigateStyle = clsx(
    'flex flex-row items-center w-fit h-fit text-sm font-medium transition-all rounded-full justify-center gap-2 px-3 py-1.5',
    {
      'bg-secondary hover:bg-secondary/90 font-semibold': activeVariant,
      'bg-transparent hover:bg-secondary/20 font-normal text-muted-foreground':
        !activeVariant,
    }
  )

  return (
    <Navigate to={to} className={navigateStyle}>
      {children}
    </Navigate>
  )
}
