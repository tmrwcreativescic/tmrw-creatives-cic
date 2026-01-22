import Link from "next/link"
import { ArrowRight, Users, Building2, Briefcase, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

const pathways = [
  {
    icon: Music,
    title: "Young Creative (12-30)",
    action: "Join a programme",
    href: "/programmes",
  },
  {
    icon: Building2,
    title: "School or Youth Org",
    action: "Partner with us",
    href: "/contact?type=partner",
  },
  {
    icon: Briefcase,
    title: "Industry Professional",
    action: "Mentor or deliver sessions",
    href: "/get-involved?type=mentor",
  },
  {
    icon: Users,
    title: "Venue or Business",
    action: "Host or sponsor",
    href: "/get-involved?type=sponsor",
  },
]

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-tmrw-purple via-tmrw-magenta to-tmrw-cyan text-white overflow-hidden relative">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-10" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-4">
              There&apos;s a Place Here
              <br />
              For Everyone.
            </h2>
            <p className="font-body text-xl text-white/80 max-w-2xl mx-auto">
              Whether you&apos;re starting your journey or looking to give back,
              we&apos;ve got a role for you.
            </p>
          </div>

          {/* Pathway Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {pathways.map((pathway) => (
              <Link
                key={pathway.title}
                href={pathway.href}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 border border-white/10"
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                  <pathway.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase mb-2">
                  {pathway.title}
                </h3>
                <p className="font-accent text-sm text-white/80 flex items-center gap-2 group-hover:gap-3 transition-all">
                  {pathway.action}
                  <ArrowRight className="w-4 h-4" />
                </p>
              </Link>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <Button
              asChild
              size="xl"
              className="bg-white text-tmrw-purple hover:bg-white/90 font-accent font-bold uppercase"
            >
              <Link href="/get-involved">
                Get Involved <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
