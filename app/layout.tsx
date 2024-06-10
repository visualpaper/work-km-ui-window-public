import { Container } from '@mui/material'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Km UI Window',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`/favicon.ico`} />
      </head>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
