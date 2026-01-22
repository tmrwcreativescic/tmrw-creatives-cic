"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Clock, MapPin, PoundSterling, ArrowLeft, Check, Share2, Briefcase, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ApplicationModal } from "@/components/opportunities/ApplicationModal"
import type { Opportunity } from "@/data/opportunities"

interface OpportunityDetailClientProps {
  opportunity: Opportunity
}

function getTypeColor(type: string): "purple" | "magenta" | "cyan" | "dark" {
  switch (type) {
    case "Paid Gig":
    case "Performance":
      return "magenta"
    case "Placement":
    case "Part-time Role":
      return "purple"
    case "Commission":
      return "cyan"
    default:
      return "dark"
  }
}

export function OpportunityDetailClient({ opportunity }: OpportunityDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: opportunity.title,
          text: opportunity.description,
          url: window.location.href,
        })
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-0 bg-tmrw-black">
        <div className="absolute inset-0 bg-gradient-to-br from-tmrw-purple/20 via-tmrw-black to-tmrw-magenta/10" />

        <div className="container mx-auto px-4 lg:px-6 relative z-10 py-16 lg:py-24">
          {/* Back Button */}
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 font-accent text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Opportunities
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant={getTypeColor(opportunity.type)} className="font-accent">
                {opportunity.type}
              </Badge>
              <span className="text-tmrw-cyan font-accent font-bold">
                {opportunity.compensation}
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-tight mb-4">
              {opportunity.title}
            </h1>

            <p className="font-accent text-xl text-gray-300 mb-6">
              {opportunity.company}
            </p>

            <p className="font-body text-lg text-gray-400 mb-8 max-w-2xl">
              {opportunity.description}
            </p>

            {/* Opportunity Meta */}
            <div className="flex flex-wrap gap-6 text-white mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">{opportunity.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">Deadline: {opportunity.deadline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-tmrw-cyan" />
                <span className="font-body">Posted: {opportunity.postedDate}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="font-accent font-bold uppercase"
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleShare}
                className="font-accent font-bold uppercase"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share
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
                About This Opportunity
              </h2>
              <div className="prose prose-lg max-w-none font-body text-gray-600">
                {opportunity.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Responsibilities */}
              {opportunity.responsibilities && opportunity.responsibilities.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-4">
                    What You&apos;ll Do
                  </h3>
                  <ul className="space-y-2">
                    {opportunity.responsibilities.map((item) => (
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
              {opportunity.requirements && opportunity.requirements.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-4">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {opportunity.requirements.map((req) => (
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

              {/* Benefits */}
              {opportunity.benefits && opportunity.benefits.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-4">
                    What You&apos;ll Get
                  </h3>
                  <ul className="space-y-2">
                    {opportunity.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-tmrw-magenta flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        <span className="font-body text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Apply Card */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                      Opportunity Details
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <Building2 className="w-5 h-5 text-tmrw-purple mt-0.5" />
                        <div>
                          <p className="font-accent text-sm font-bold text-tmrw-black">Company</p>
                          <p className="font-body text-gray-600">{opportunity.company}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-tmrw-purple mt-0.5" />
                        <div>
                          <p className="font-accent text-sm font-bold text-tmrw-black">Type</p>
                          <p className="font-body text-gray-600">{opportunity.type}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-tmrw-purple mt-0.5" />
                        <div>
                          <p className="font-accent text-sm font-bold text-tmrw-black">Location</p>
                          <p className="font-body text-gray-600">{opportunity.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <PoundSterling className="w-5 h-5 text-tmrw-purple mt-0.5" />
                        <div>
                          <p className="font-accent text-sm font-bold text-tmrw-black">Compensation</p>
                          <p className="font-body text-gray-600">{opportunity.compensation}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-tmrw-purple mt-0.5" />
                        <div>
                          <p className="font-accent text-sm font-bold text-tmrw-black">Deadline</p>
                          <p className="font-body text-gray-600">{opportunity.deadline}</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full font-accent font-bold uppercase"
                    >
                      Apply Now
                    </Button>

                    {opportunity.contactEmail && (
                      <p className="font-body text-xs text-gray-500 text-center mt-4">
                        Questions? Email{" "}
                        <a
                          href={`mailto:${opportunity.contactEmail}`}
                          className="text-tmrw-purple hover:underline"
                        >
                          {opportunity.contactEmail}
                        </a>
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Share Card */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-4">
                      Know Someone Perfect?
                    </h3>
                    <p className="font-body text-sm text-gray-600 mb-4">
                      Share this opportunity with your network.
                    </p>
                    <Button
                      variant="outline-dark"
                      onClick={handleShare}
                      className="w-full font-accent font-bold"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Opportunity
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-tmrw-black mb-4">
            Not the Right Fit?
          </h2>
          <p className="font-body text-gray-600 mb-6">
            Check out our other opportunities or join TMRW to access more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline-dark" className="font-accent font-bold">
              <Link href="/opportunities">View All Opportunities</Link>
            </Button>
            <Button asChild className="font-accent font-bold">
              <Link href="/get-involved">Join TMRW</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        opportunity={opportunity}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
