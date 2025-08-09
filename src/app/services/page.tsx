export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Services</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[
          {title: "Dedicated 24 hour care at Ash’s home", slug: "home_care", desc: "Your dog stays with me, one on one."},
          {title: "Dedicated 24 hour care at your home", slug: "in_home", desc: "I stay at your place, keep routines stable."},
          {title: "Daycare", slug: "daycare", desc: "Up to 8 hours of care."},
          {title: "Overnight", slug: "overnight", desc: "12 hours overnight presence."},
          {title: "Drop in visit", slug: "drop_in", desc: "30 minute visit for feeding, meds, or cuddles."},
        ].map(card => (
          <div key={card.slug} className="rounded-xl border p-6">
            <h3 className="font-medium">{card.title}</h3>
            <p className="text-gray-700 mt-2 text-sm">{card.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-700">Peak season or public holidays may incur a surcharge. Walk add ons available.</p>
    </div>
  )
}
