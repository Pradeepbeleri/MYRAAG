import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MYRAAG - Intelligent Voice Operating System',
  description: 'MYRAAG - Your AI Voice OS for productivity, memory, and automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-[#F5F5F5] font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
