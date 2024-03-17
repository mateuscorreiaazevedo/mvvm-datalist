import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/ui/icon'
import { DropdownSelectThemeViewProps } from '../types/select-theme.types'

export function DropdownSelectThemeView(props: DropdownSelectThemeViewProps) {
  const { setTheme, themes, title } = props

  return (
    <DropdownMenuGroup>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <span className="relative mr-2">
            <Icon
              name="Sun"
              className="size-4 font-light opacity-100 dark:opacity-0"
            />
            <Icon
              name="Moon"
              className="absolute top-0 size-4 font-light opacity-0 dark:opacity-100"
            />
          </span>
          <span className="font-normal">{title}</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          {themes.map(theme => (
            <DropdownMenuItem
              key={theme.value}
              onClick={() => setTheme(theme.value as string)}
            >
              {theme.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    </DropdownMenuGroup>
  )
}
