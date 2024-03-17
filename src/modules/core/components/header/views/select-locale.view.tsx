'use client'

import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icon'
import { DropdownSelectLocaleViewProps } from '../types/select-locale.types'

export function DropdownSelectLocaleView(props: DropdownSelectLocaleViewProps) {
  const { locales, setLocale, constants: c } = props
  return (
    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Icon name={c.icon} className="mr-2 size-4 font-light" />
          <span className="mr-2 font-normal">{c.title}</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          {locales.map(locale => (
            <DropdownMenuItem
              key={locale.value}
              onClick={() => setLocale(locale.value as string)}
            >
              {locale.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  )
}
