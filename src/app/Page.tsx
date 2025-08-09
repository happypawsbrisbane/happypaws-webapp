import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight">Boutique one on one pet care</h1>
          <p className="mt-4 text-lg text-gray-700">
            Calm, attentive care for anxious and VIP pets. Limited bookings, all focus.
          </p>
          <div className="mt-8 space-x-3">
            <Link href="/booking" className="inline-block rounded px-4 py-2 bg-black text-white">Request booking</Link>
            <Link href="/services" className="inline-block rounded px-4 py-2 border">View services</Link>
          </div>
          <ul className="mt-8 list-disc pl-5 text-gray-700 space-y-1 text-sm">
            <li>Dedicated 24 hour care at my place or yours</li>
            <li>Medication administration included</li>
            <li>Meet and greet for new clients</li>
          </ul>
        </div>
        <div className="aspect-video rounded-xl border bg-gradient-to-br from-brand-100 to-brand-300" />
      </section>
    </div>
  )
}
