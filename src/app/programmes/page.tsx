import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, Music, Users, Megaphone, Briefcase, Check } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Programmes | TMRW Creatives CIC",
  description: "Explore our four core programmes: Create, Connect, Build, and Work. Real skills, real connections, real pathways into the music and creative industries.",
}

const programmes = [
  {
    id: "create",
    title: "Create",
    tagline: "Music Creation & Skills Development",
    description: "Hands-on sessions in songwriting, production, recording, and collaboration. Work with professional equipment and learn from active industry practitioners.",
    icon: Music,
    color: "purple" as const,
    bgColor: "bg-tmrw-purple",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80",
    features: [
      "Songwriting workshops with published writers",
      "Music production using industry-standard DAWs",
      "Recording sessions in professional studios",
      "Collaborative projects with other creatives",
      "Feedback from A&Rs and industry professionals",
    ],
    href: "/programmes/create",
  },
  {
    id: "connect",
    title: "Connect",
    tagline: "Industry Access & Mentorship",
    description: "Direct access to A&Rs, managers, publishers, and working professionals. Build relationships that can shape your career through structured mentorship programmes.",
    icon: Users,
    color: "magenta" as const,
    bgColor: "bg-tmrw-magenta",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    features: [
      "1-to-1 mentorship with industry professionals",
      "Networking events and industry mixers",
      "A&R listening sessions and feedback",
      "Manager and publisher introductions",
      "Career guidance and planning",
    ],
    href: "/programmes/connect",
  },
  {
    id: "build",
    title: "Build",
    tagline: "Marketing, Branding & Digital Skills",
    description: "Learn to promote yourself and build an audience. Master social media, content creation, branding, and the business side of being a creative professional.",
    icon: Megaphone,
    color: "cyan" as const,
    bgColor: "bg-tmrw-cyan",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    features: [
      "Social media strategy and content planning",
      "Personal branding and visual identity",
      "Music marketing and release campaigns",
      "Video content creation and editing",
      "Building and engaging your audience",
    ],
    href: "/programmes/build",
  },
  {
    id: "work",
    title: "Work",
    tagline: "Pathways & Opportunities",
    description: "Showcases, placements, commissions, and paid gigs. Put your skills into practice with real opportunities that build your portfolio and reputation.",
    icon: Briefcase,
    color: "dark" as const,
    bgColor: "bg-tmrw-black",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    features: [
      "Live showcase opportunities",
      "Sync and licensing placements",
      "Commission-based projects",
      "Industry internships and placements",
      "Paid performance and session work",
    ],
    href: "/programmes/work",
  },
]

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        badge="OUR PROGRAMMES"
        title="Four Pathways."
        highlight="One Goal."
        description="Our programmes are designed to take you from where you are to where you want to be. Each pathway builds on the others, creating a complete journey into the creative industries."
      />

      {/* Programmes Grid */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          {programmes.map((programme, index) => (
            <div
              key={programme.id}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src={programme.image}
                    alt={programme.title}
                    width={800}
                    height={500}
                    className="w-full h-[350px] lg:h-[450px] object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={programme.color}
                      className="font-accent font-bold text-sm px-4 py-1.5"
                    >
                      {programme.title.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <div
                  className={`absolute -bottom-4 ${
                    index % 2 === 1 ? "-left-4" : "-right-4"
                  } w-full h-full ${programme.bgColor} rounded-lg -z-10 opacity-80`}
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className={`w-14 h-14 rounded-lg ${programme.bgColor} flex items-center justify-center mb-6`}>
                  <programme.icon className="w-7 h-7 text-white" />
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-2">
                  {programme.title}
                </h2>
                <p className="font-accent text-lg text-tmrw-purple mb-4">
                  {programme.tagline}
                </p>
                <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                  {programme.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {programme.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-5 h-5 rounded-full ${programme.bgColor} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </span>
                      <span className="font-body text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="font-accent font-bold">
                  <Link href={programme.href}>
                    Learn More About {programme.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              How It Works
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with TMRW Creatives is simple. Here&apos;s your journey from application to industry.
            </p>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", description: "Fill out our simple application form and tell us about yourself and your goals." },
              { step: "02", title: "Match", description: "We'll match you with the programme and cohort that best fits your needs." },
              { step: "03", title: "Learn", description: "Attend sessions, work with mentors, and develop your skills." },
              { step: "04", title: "Launch", description: "Put your skills into practice with real opportunities and connections." },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="font-heading text-6xl font-bold text-gray-200 mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600 text-sm">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-8">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-tmrw-gradient text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Applications are open for our next cohort. Spaces are limited, so don&apos;t wait to take the first step towards your creative career.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-tmrw-purple hover:bg-white/90 font-accent font-bold uppercase"
          >
            <Link href="/get-involved">Apply Now</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
