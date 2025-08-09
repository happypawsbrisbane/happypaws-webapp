'use client'
import { useState } from 'react'

export default function Booking() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true); setErr(null)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      if (!res.ok) throw new Error(await res.text())
      setOk(true)
      form.reset()
    } catch (e:any) {
      setErr(e.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  if (ok) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16">
        <h1 className="text-2xl font-semibold">Thanks</h1>
        <p className="mt-2 text-gray-700">We received your request. I will reply to confirm details and availability.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Request a booking</h1>
      <p className="mt-2 text-gray-700">Share your dates and preferences. I will confirm availability and next steps.</p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="fullName" required placeholder="Full name" className="input" />
          <input name="email" type="email" required placeholder="Email" className="input" />
          <input name="phone" placeholder="Phone" className="input" />
          <input name="petName" required placeholder="Pet name" className="input" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select name="serviceType" required className="input">
            <option value="">Select service</option>
            <option value="home_care">24h care at Ash’s home</option>
            <option value="in_home">24h care at your home</option>
            <option value="daycare">Daycare</option>
            <option value="overnight">Overnight</option>
            <option value="drop_in">Drop in</option>
          </select>
          <input name="petNeeds" placeholder="Special needs or meds" className="input" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="startDate" type="date" required className="input" />
          <input name="endDate" type="date" required className="input" />
        </div>
        <textarea name="details" placeholder="Anything else I should know" className="input h-28" />
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button disabled={loading} className="rounded px-4 py-2 bg-black text-white">
          {loading ? 'Sending...' : 'Send request'}
        </button>
      </form>

      <style jsx>{`.input { @apply w-full rounded border px-3 py-2 text-sm; }`}</style>
    </div>
  )
}
