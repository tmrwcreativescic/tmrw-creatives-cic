import Link from "next/link"
import { Metadata } from "next"
import { Calendar, MapPin, Briefcase, Clock, PoundSterling, ArrowRight, ExternalLink } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { opportunities, getFeaturedOpportunities } from "@/data/opportunities"

export const metadata: Metadata = {
  title: "Opportunities | TMRW Creatives CIC",
  description: "Current opportunities for young creatives - paid gigs, placements, commissions, and more.",
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

export default function OpportunitiesPage() {
  const featuredOpps = getFeaturedOpportunities()
  const regularOpps = opportunities.filter((o) => !o.featured)

  return (
    <>
      <PageHero
        badge="OPPORTUNITIES"
        title="Your Next"
        highlight="Opportunity."
        description="Paid gigs, placements, commissions, and more. Real opportunities for TMRW community members to put their skills to work."
      />

      {/* Featured Opportunities */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              Featured Opportunities
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredOpps.map((opp) => (
              <Link
                key={opp.id}
                href={`/opportunities/${opp.id}`}
                className="group block"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant={getTypeColor(opp.type)} className="font-accent">
                        {opp.type}
                      </Badge>
                      <span className="font-accent text-sm text-tmrw-purple font-bold">
                        {opp.compensation}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-2 group-hover:text-tmrw-purple transition-colors">
                      {opp.title}
                    </h3>
                    <p className="font-accent text-sm text-gray-500 mb-4">
                      {opp.company}
                    </p>

                    <p className="font-body text-gray-600 text-sm mb-4">
                      {opp.description}
                    </p>

                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {opp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Deadline: {opp.deadline}
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="font-accent text-xs text-gray-500 mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {opp.requirements.slice(0, 3).map((req) => (
                          <span
                            key={req}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span className="font-accent font-bold text-tmrw-purple inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Opportunities */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="mb-12">
            <h2 className="font-heading text-3xl font-bold uppercase text-tmrw-black mb-4">
              All Opportunities
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient rounded-full" />
          </div>

          <div className="space-y-4">
            {regularOpps.map((opp) => (
              <Link
                key={opp.id}
                href={`/opportunities/${opp.id}`}
                className="group block"
              >
                <Card className="border-0 shadow-md hover:shadow-lg transition-all bg-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <Badge variant={getTypeColor(opp.type)} className="font-accent">
                            {opp.type}
                          </Badge>
                          <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black group-hover:text-tmrw-purple transition-colors">
                            {opp.title}
                          </h3>
                        </div>
                        <p className="font-accent text-sm text-gray-500 mb-2">
                          {opp.company} • {opp.location}
                        </p>
                        <p className="font-body text-gray-600 text-sm">
                          {opp.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 lg:text-right">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <PoundSterling className="w-4 h-4" />
                          <span className="font-bold text-tmrw-purple">{opp.compensation}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {opp.deadline}
                        </div>
                        <span className="font-accent font-bold text-sm text-tmrw-purple inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-2">
                          View Details <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
              How to Access Opportunities
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Join TMRW",
                description: "Complete at least one of our programmes to become part of the community.",
              },
              {
                step: "02",
                title: "Build Your Profile",
                description: "Create your creative profile and portfolio to be matched with opportunities.",
              },
              {
                step: "03",
                title: "Apply & Work",
                description: "When opportunities match your skills, apply directly through our platform.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-heading text-5xl font-bold text-gray-700 mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold uppercase mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-accent font-bold uppercase">
              <Link href="/get-involved">Join TMRW</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Submit Opportunity */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Briefcase className="w-12 h-12 text-tmrw-purple mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold uppercase text-tmrw-black mb-4">
              Have an Opportunity to Share?
            </h2>
            <p className="font-body text-lg text-gray-600 mb-8">
              If you&apos;re looking to hire, collaborate with, or commission young creatives from our community, we&apos;d love to hear from you.
            </p>
            <Button asChild variant="outline-dark" size="lg" className="font-accent font-bold">
              <Link href="/contact?type=opportunity">
                Submit an Opportunity <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
