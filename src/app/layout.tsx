import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Happy Paws Brisbane',
  description: 'Boutique, one on one pet care in Brisbane.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">Happy Paws Brisbane</Link>
            <nav className="space-x-6 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/booking">Booking</Link>
              <Link href="/admin">Admin</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
            St Lucia Based · happypawsbrisbane.com · 0401 606 603
          </div>
        </footer>
      </body>
    </html>
  )
}
