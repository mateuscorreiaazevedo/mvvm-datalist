import { useTranslationsFooter } from '@/modules/core'

export function Footer() {
  const { copy, powered, me } = useTranslationsFooter()

  return (
    <footer className="w-full border-t bg-background py-10">
      <div className="container flex items-center justify-between">
        <span>
          {powered} <strong className="text-primary">{me}</strong>
        </span>
        <span
          className="text-primary"
          dangerouslySetInnerHTML={{
            __html: copy,
          }}
        />
      </div>
    </footer>
  )
}
