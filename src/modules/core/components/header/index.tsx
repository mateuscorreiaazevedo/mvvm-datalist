import { HeaderNav } from './nav'
import { HeaderTabs } from './tabs'

export function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container pb-4 pt-8">
        <HeaderNav />
        <HeaderTabs />
      </div>
    </header>
  )
}
