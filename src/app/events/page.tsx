import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { events, getFeaturedEvents } from "@/data/events"

export const metadata: Metadata = {
  title: "Events | TMRW Creatives CIC",
  description: "Upcoming events, workshops, showcases, and networking opportunities for young creatives in Medway.",
}

const eventTypes = [
  { name: "All Events", count: events.length },
  { name: "Workshops", count: events.filter((e) => e.type === "Workshop").length },
  { name: "Showcases", count: events.filter((e) => e.type === "Showcase").length },
  { name: "Networking", count: events.filter((e) => e.type === "Networking" || e.type === "Industry Event").length },
  { name: "Masterclasses", count: events.filter((e) => e.type === "Masterclass").length },
  { name: "Open Days", count: events.filter((e) => e.type === "Open Day").length },
]

function getTypeColor(type: string): "purple" | "magenta" | "cyan" | "dark" {
  switch (type) {
    case "Workshop":
    case "Masterclass":
      return "purple"
    case "Showcase":
      return "magenta"
    case "Networking":
    case "Industry Event":
      return "cyan"
    default:
      return "dark"
  }
}

export default function EventsPage() {
  const featuredEvents = getFeaturedEvents()
  const regularEvents = events.filter((e) => !e.featured)

  return (
    <>
      <PageHero
        badge="WHAT'S ON"
        title="Events &"
        highlight="Opportunities."
        description="Workshops, showcases, networking events, and more. Join our community events and take the next step in your creative journey."
      />

      {/* Featured Events */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              Featured Events
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.id}`}
                className="group block"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <Badge
                      variant={getTypeColor(event.type)}
                      className="absolute top-4 left-4 font-accent"
                    >
                      {event.type}
                    </Badge>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-heading text-2xl font-bold uppercase mb-2 group-hover:text-tmrw-cyan transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <p className="font-body text-gray-600 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        {event.spots} spots
                      </span>
                      <span className="font-accent font-bold text-tmrw-purple inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                        View Event <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <div className="lg:w-64 flex-shrink-0">
              <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                Filter by Type
              </h3>
              <ul className="space-y-2">
                {eventTypes.map((type) => (
                  <li key={type.name}>
                    <button className="w-full flex justify-between items-center px-4 py-2 rounded-lg hover:bg-white transition-colors font-body text-left">
                      <span>{type.name}</span>
                      <span className="text-sm text-gray-500">{type.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Events Grid */}
            <div className="flex-1">
              <div className="mb-8">
                <h2 className="font-heading text-3xl font-bold uppercase text-tmrw-black mb-4">
                  Upcoming Events
                </h2>
                <div className="w-24 h-1 bg-tmrw-gradient rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {regularEvents.map((event) => (
                  <Link
                    key={event.id}
                    href={`/events/${event.id}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <Badge
                          variant={getTypeColor(event.type)}
                          className="absolute top-4 left-4 font-accent"
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-2 group-hover:text-tmrw-purple transition-colors">
                          {event.title}
                        </h3>
                        <div className="space-y-2 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {event.date} at {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                        <p className="font-body text-gray-600 text-sm mb-4 line-clamp-2">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-sm text-gray-500">
                            <Users className="w-4 h-4" />
                            {event.spots} spots
                          </span>
                          <span className="font-accent font-bold text-sm text-tmrw-purple inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                            View Event <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 lg:py-28 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
            Never Miss an Event
          </h2>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter and be the first to know about upcoming events, workshops, and opportunities.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-tmrw-purple"
            />
            <Button type="submit" className="font-accent font-bold">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  )
}
