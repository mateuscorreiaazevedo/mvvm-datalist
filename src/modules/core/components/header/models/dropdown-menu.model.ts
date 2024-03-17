import { useFallbackName } from '@/modules/core/hooks/use-fallback-name'
import { useState } from 'react'

export function useDrodpdownMenu() {
  const [open, setOpen] = useState<boolean>(false)

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
  }
}
