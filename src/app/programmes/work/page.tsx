import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Briefcase, Mic2, Radio, Film, Award, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Work Programme | TMRW Creatives CIC",
  description: "Pathways and opportunities programme. Showcases, placements, commissions, and paid gigs to help you build your portfolio and launch your career.",
}

const opportunities = [
  {
    icon: Mic2,
    title: "Live Showcases",
    description: "Perform at curated events in front of industry professionals, tastemakers, and new audiences.",
    examples: ["Monthly open mic nights", "Quarterly showcases", "Festival slots", "Support slots"],
  },
  {
    icon: Radio,
    title: "Sync & Licensing",
    description: "Get your music placed in adverts, films, TV shows, and video games through our sync partners.",
    examples: ["Music library submissions", "Sync briefs", "Licensing workshops", "Catalogue building"],
  },
  {
    icon: Film,
    title: "Commissions",
    description: "Paid opportunities to create original music for brands, agencies, and content creators.",
    examples: ["Brand partnerships", "Commercial work", "Content creator briefs", "Jingle creation"],
  },
  {
    icon: Award,
    title: "Industry Placements",
    description: "Work experience and internships at record labels, studios, agencies, and music companies.",
    examples: ["Label internships", "Studio placements", "PR agency work", "Management experience"],
  },
]

const recentPlacements = [
  {
    title: "Session Vocalist",
    company: "Independent Production",
    type: "Paid Session",
  },
  {
    title: "Marketing Intern",
    company: "Sony Music UK",
    type: "Placement",
  },
  {
    title: "Support Act",
    company: "O2 Academy Brixton",
    type: "Performance",
  },
  {
    title: "Sync Placement",
    company: "ITV Drama",
    type: "Licensing",
  },
  {
    title: "Studio Assistant",
    company: "Metropolis Studios",
    type: "Placement",
  },
  {
    title: "Brand Campaign",
    company: "Major Sportswear Brand",
    type: "Commission",
  },
]

export default function WorkProgrammePage() {
  return (
    <>
      <PageHero
        badge="WORK PROGRAMME"
        title="Put Your Skills"
        highlight="To Work."
        description="Showcases, placements, commissions, and paid gigs. The WORK programme is where preparation meets opportunity — putting your developed skills into practice with real projects."
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 rounded-lg bg-tmrw-black flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-6">
                From Learning to Earning
              </h2>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-6">
                The WORK programme is the culmination of your journey with TMRW. This is where we put you in front of real opportunities — paid gigs, industry placements, and projects that build your CV and portfolio.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
                We don&apos;t just train you and send you off. We actively create and source opportunities for our community, leveraging our industry relationships to open doors.
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="font-heading text-2xl font-bold text-tmrw-black mb-2">
                  £50,000+
                </p>
                <p className="font-body text-gray-600">
                  Paid to TMRW creatives through placements and commissions in the last year.
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80"
                  alt="Live performance opportunity"
                  width={800}
                  height={600}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-tmrw-black rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              Types of Opportunities
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp) => (
              <Card key={opp.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-tmrw-black flex items-center justify-center flex-shrink-0">
                      <opp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-2">
                        {opp.title}
                      </h3>
                      <p className="font-body text-gray-600 mb-4">
                        {opp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {opp.examples.map((example) => (
                          <span
                            key={example}
                            className="font-accent text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Placements */}
      <section className="py-20 lg:py-28 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
              Recent Placements
            </h2>
            <p className="font-body text-gray-400 max-w-2xl mx-auto">
              A snapshot of opportunities our community members have accessed through the WORK programme.
            </p>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPlacements.map((placement) => (
              <div
                key={placement.title}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <Badge variant="purple" className="mb-4">
                  {placement.type}
                </Badge>
                <h3 className="font-heading text-lg font-bold uppercase mb-2">
                  {placement.title}
                </h3>
                <p className="font-body text-gray-400">
                  {placement.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
                How to Access WORK Opportunities
              </h2>
              <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Complete a Foundation Programme",
                  description: "Finish at least one of our other programmes (CREATE, CONNECT, or BUILD) to demonstrate your commitment and skills.",
                },
                {
                  step: "02",
                  title: "Build Your Portfolio",
                  description: "Have work ready to show — whether that's recordings, a social presence, or documented skills.",
                },
                {
                  step: "03",
                  title: "Join the Opportunities List",
                  description: "Get added to our internal list where we share opportunities before they go public.",
                },
                {
                  step: "04",
                  title: "Apply & Pitch",
                  description: "When opportunities match your skills, we'll guide you through the application process.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="font-heading text-4xl font-bold text-gray-200">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-tmrw-gradient text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
            Ready to Work?
          </h2>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Start your journey with one of our foundation programmes, and we&apos;ll help you access real industry opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-tmrw-purple hover:bg-white/90 font-accent font-bold uppercase"
            >
              <Link href="/get-involved">Start Your Journey</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-accent font-bold uppercase"
            >
              <Link href="/opportunities">
                View Current Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
