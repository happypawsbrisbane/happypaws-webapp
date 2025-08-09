import { prisma } from '@/lib/prisma'
import { format } from '@/lib/time'

export const dynamic = 'force-dynamic'

export default async function Admin() {
  const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } })
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Bookings</h1>
      <table className="mt-8 w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-2">When</th>
            <th className="py-2">Client</th>
            <th className="py-2">Pet</th>
            <th className="py-2">Service</th>
            <th className="py-2">Dates</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(b => (
            <tr key={b.id} className="border-b">
              <td className="py-2">{format(b.createdAt)}</td>
              <td className="py-2">{b.fullName} · {b.email}</td>
              <td className="py-2">{b.petName}</td>
              <td className="py-2">{b.serviceType}</td>
              <td className="py-2">{format(b.startDate)} to {format(b.endDate)}</td>
              <td className="py-2">{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-6 text-gray-700">Basic auth protects this page. Set ADMIN_USER and ADMIN_PASS in your environment.</p>
    </div>
  )
}
