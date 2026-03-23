import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 't.PLEUGER — VISTA',
  description: 'PORTOFOLIO FOR VISTA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
