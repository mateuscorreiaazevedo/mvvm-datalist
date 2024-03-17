import { HeaderNav } from './nav'

export function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container pt-8">
        <HeaderNav />
      </div>
    </header>
  )
}
