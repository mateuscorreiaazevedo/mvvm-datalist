import { useFallbackName } from '@/modules/core/hooks/use-fallback-name'
import { useTranslationsHeader } from '@/modules/core/hooks/use-translations-header'
import { useState } from 'react'

export function useDrodpdownMenu() {
  const [open, setOpen] = useState<boolean>(false)
  const { header } = useTranslationsHeader()

  const user = {
    name: 'John Doe',
    email: 'john@nivo.video',
    avatarUrl: 'https://mighty.tools/mockmind-api/content/human/57.jpg',
  }

  return {
    open,
    setOpen,
    user: {
      ...user,
      fallback: useFallbackName(user.name),
    },
    logout: header.nav.dropdownMenu.logout,
  }
}
