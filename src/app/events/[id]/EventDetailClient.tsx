"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ArrowLeft, Check, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { RegistrationModal } from "@/components/events/RegistrationModal"
import type { Event } from "@/data/events"

interface EventDetailClientProps {
  event: Event
}

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

export function EventDetailClient({ event }: EventDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event.title,
          text: event.description,
          url: window.location.href,
        })
      } catch {
        // User cancelled or error
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-0 bg-tmrw-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tmrw-black via-tmrw-black/80 to-tmrw-black/60" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10 py-16 lg:py-24">
          {/* Back Button */}
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-accent text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>

          <div className="max-w-4xl">
            <Badge variant={getTypeColor(event.type)} className="mb-4 font-accent">
              {event.type}
            </Badge>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight mb-6">
              {event.title}
            </h1>

            <p className="font-body text-xl text-gray-300 mb-8 max-w-2xl">
              {event.description}
            </p>

            {/* Event Meta */}
            <div className="flex flex-wrap gap-6 text-white mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">{event.spots} spots available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="font-accent font-bold uppercase"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleShare}
                className="font-accent font-bold uppercase"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share Event
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-6">
                About This Event
              </h2>
              <div className="prose prose-lg max-w-none font-body text-gray-600">
                {event.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* What to Bring */}
              {event.whatToBring && event.whatToBring.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-4">
                    What to Bring
                  </h3>
                  <ul className="space-y-2">
                    {event.whatToBring.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-tmrw-cyan flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        <span className="font-body text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requirements */}
              {event.requirements && event.requirements.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-4">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {event.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-tmrw-purple flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        <span className="font-body text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
              {/* Registration Card */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                    Event Details
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-tmrw-purple mt-0.5" />
                      <div>
                        <p className="font-accent text-sm font-bold text-tmrw-black">Date</p>
                        <p className="font-body text-gray-600">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-tmrw-purple mt-0.5" />
                      <div>
                        <p className="font-accent text-sm font-bold text-tmrw-black">Time</p>
                        <p className="font-body text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-tmrw-purple mt-0.5" />
                      <div>
                        <p className="font-accent text-sm font-bold text-tmrw-black">Location</p>
                        <p className="font-body text-gray-600">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-tmrw-purple mt-0.5" />
                      <div>
                        <p className="font-accent text-sm font-bold text-tmrw-black">Capacity</p>
                        <p className="font-body text-gray-600">{event.spots} spots</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full font-accent font-bold uppercase"
                  >
                    Register Now
                  </Button>

                  <p className="font-body text-xs text-gray-500 text-center mt-4">
                    Free to attend • Limited spaces
                  </p>
                </CardContent>
              </Card>

              {/* Facilitator Card */}
              {event.facilitator && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                      Hosted By
                    </h3>
                    <div className="flex items-center gap-4">
                      <Image
                        src={event.facilitator.image}
                        alt={event.facilitator.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-heading font-bold text-tmrw-black">
                          {event.facilitator.name}
                        </p>
                        <p className="font-accent text-sm text-tmrw-purple">
                          {event.facilitator.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-4">
            Can&apos;t Make This Event?
          </h2>
          <p className="font-body text-gray-600 mb-6">
            Check out our other upcoming events or join our mailing list to stay updated.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline-dark" className="font-accent font-bold">
              <Link href="/events">View All Events</Link>
            </Button>
            <Button asChild className="font-accent font-bold">
              <Link href="/get-involved">Join TMRW</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      <RegistrationModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
