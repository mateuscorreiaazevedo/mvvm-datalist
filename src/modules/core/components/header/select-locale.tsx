import { useDropdownSelectLocaleModel } from './models/select-locale.model'
import { DropdownSelectLocaleView } from './views/select-locale.view'

export function DropdownSelectLocale() {
  return <DropdownSelectLocaleView {...useDropdownSelectLocaleModel()} />
}
