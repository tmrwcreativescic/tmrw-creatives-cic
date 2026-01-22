import { Metadata } from "next"
import { notFound } from "next/navigation"
import { events, getEventById } from "@/data/events"
import { EventDetailClient } from "./EventDetailClient"

interface EventPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }))
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { id } = await params
  const event = getEventById(parseInt(id))

  if (!event) {
    return {
      title: "Event Not Found | TMRW Creatives CIC",
    }
  }

  return {
    title: `${event.title} | TMRW Creatives CIC`,
    description: event.description,
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params
  const event = getEventById(parseInt(id))

  if (!event) {
    notFound()
  }

  return <EventDetailClient event={event} />
}
