'use client'

import { useDrodpdownMenu } from './models/dropdown-menu.model'
import { DropdownMenuView } from './views/dropdown-menu.view'

export function NavDropdownMenu() {
  return <DropdownMenuView {...useDrodpdownMenu()} />
}
