import { HeaderTabsView } from './views/tabs.view'
import { useHeaderTabs } from './models/tabs.model'

export function HeaderTabs() {
  return <HeaderTabsView {...useHeaderTabs()} />
}
