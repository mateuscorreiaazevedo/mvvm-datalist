'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icon'
import { HeaderNavDropdownMenuViewProps } from '../types/dropdown-menu.types'
import { DropdownSelectTheme } from '../select-theme'
import { DropdownSelectLocale } from '../select-locale'

export function DropdownMenuView(props: HeaderNavDropdownMenuViewProps) {
  const { open, setOpen, user, logout } = props

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} size={'lg'} className="gap-3 p-2">
          <div className="flex flex-col items-end">
            <strong className="text-sm font-medium">{user.name}</strong>
            <span className="text-xs font-normal text-muted-foreground">
              {user.email}
            </span>
          </div>
          <Avatar className="h-8 w-8">
            <AvatarFallback>{user.fallback}</AvatarFallback>
            {user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
          </Avatar>
          <Icon
            name="ChevronDown"
            data-open={open}
            className="size-4 text-muted-foreground transition-transform data-[open=true]:-rotate-180"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full" align="end" sideOffset={4}>
        <DropdownSelectTheme />
        <DropdownMenuSeparator />
        <DropdownSelectLocale />
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icon name={logout.icon} className="mr-2 size-4" />
          {logout.label}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
