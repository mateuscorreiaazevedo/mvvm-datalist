import { Navigate } from '@/components/navigate'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nivo - Loading...',
}

export default function NotFoundPage() {
  return (
    <>
      404 - Page not found <Navigate to="/">To back Home</Navigate>
    </>
  )
}
