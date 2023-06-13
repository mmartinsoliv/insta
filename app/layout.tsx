import './globals.css'
import { Inter } from 'next/font/google'

import { UserStorage } from '@/context/userContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instapets',
  description: 'Instapets is social network to pets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserStorage>
          {children}
        </UserStorage>
      </body>
    </html>
  )
}
