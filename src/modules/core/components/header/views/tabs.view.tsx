import { Icon, IconName } from '@/components/ui/icon'
import { NavLink } from '../../nav-link'
import { HeaderTabsViewProps } from '../types/tabs.types'

export function HeaderTabsView({ links }: HeaderTabsViewProps) {
  return (
    <div className="flex items-center justify-start gap-3">
      {links.map(item => (
        <NavLink to={item.value as string} key={item.value}>
          <Icon name={item.key as IconName} className="size-4" strokeWidth={1.5} />
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}
