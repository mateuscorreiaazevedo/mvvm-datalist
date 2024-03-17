import { useDropdownSelectThemeModel } from './models/select-theme.model'
import { DropdownSelectThemeView } from './views/select-theme.view'

export function DropdownSelectTheme() {
  return <DropdownSelectThemeView {...useDropdownSelectThemeModel()} />
}
