import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const BookingSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  petName: z.string().min(1),
  serviceType: z.enum(['home_care','in_home','daycare','overnight','drop_in']),
  startDate: z.string(),
  endDate: z.string(),
  details: z.string().optional(),
  petNeeds: z.string().optional(),
})

export async function POST(req: Request) {
  const json = await req.json()
  const parse = BookingSchema.safeParse(json)
  if (!parse.success) {
    return new NextResponse(JSON.stringify(parse.error.flatten()), { status: 400 })
  }
  const data = parse.data
  const booking = await prisma.booking.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      petName: data.petName,
      serviceType: data.serviceType,
      startDate: new Date(data.startDate),
      endDate: new Date(data.endDate),
      details: [data.details, data.petNeeds].filter(Boolean).join('\n'),
    }
  })
  return NextResponse.json({ id: booking.id })
}
