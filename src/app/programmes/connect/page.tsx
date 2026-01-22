import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Users, Check, Clock, Calendar, UserCheck, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Connect Programme | TMRW Creatives CIC",
  description: "Industry access and mentorship programme. Direct connections to A&Rs, managers, publishers, and working professionals in the music industry.",
}

const mentorTypes = [
  {
    title: "A&R Professionals",
    description: "Get your music heard by the people who sign artists. Receive honest feedback and industry insights.",
  },
  {
    title: "Artist Managers",
    description: "Learn what managers look for and how to make yourself ready for professional management.",
  },
  {
    title: "Music Publishers",
    description: "Understand publishing deals, sync opportunities, and how to monetise your songwriting.",
  },
  {
    title: "Working Artists",
    description: "Connect with artists who are actively releasing music and touring. Learn from their journey.",
  },
]

const events = [
  {
    title: "Monthly Industry Mixers",
    description: "Networking events where you can meet professionals in a relaxed environment.",
  },
  {
    title: "A&R Listening Sessions",
    description: "Submit your music and get direct feedback from label A&Rs.",
  },
  {
    title: "Panel Discussions",
    description: "Hear from industry professionals about their career paths and advice.",
  },
  {
    title: "1-to-1 Mentorship",
    description: "Matched with a mentor based on your goals for ongoing guidance.",
  },
]

export default function ConnectProgrammePage() {
  return (
    <>
      <PageHero
        badge="CONNECT PROGRAMME"
        title="Access The"
        highlight="Industry."
        description="Direct access to A&Rs, managers, publishers, and working professionals. Build relationships that can shape your career through structured mentorship and networking opportunities."
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-14 h-14 rounded-lg bg-tmrw-magenta flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-6">
                It&apos;s Who You Know
              </h2>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-6">
                The music industry runs on relationships. The CONNECT programme gives you access to the people and networks that can accelerate your career — connections that would typically take years to build.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
                Our mentors aren&apos;t just advisors — they&apos;re active professionals who can open doors, make introductions, and champion your work to the right people.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <UserCheck className="w-6 h-6 text-tmrw-magenta mx-auto mb-2" />
                  <p className="font-accent text-sm font-bold text-tmrw-black">50+</p>
                  <p className="font-body text-xs text-gray-500">Active Mentors</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-tmrw-magenta mx-auto mb-2" />
                  <p className="font-accent text-sm font-bold text-tmrw-black">12 Months</p>
                  <p className="font-body text-xs text-gray-500">Programme Length</p>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-tmrw-magenta mx-auto mb-2" />
                  <p className="font-accent text-sm font-bold text-tmrw-black">Monthly</p>
                  <p className="font-body text-xs text-gray-500">1-to-1 Sessions</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80"
                  alt="Industry networking event"
                  width={800}
                  height={600}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-tmrw-magenta rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Types Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              Who You&apos;ll Meet
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorTypes.map((type) => (
              <Card key={type.title} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-3">
                    {type.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Opportunities */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-8">
                Events & Opportunities
              </h2>

              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.title} className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tmrw-magenta flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-tmrw-black">
                        {event.title}
                      </h3>
                      <p className="font-body text-gray-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-tmrw-magenta rounded-lg p-8 text-white">
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">
                Mentorship Matching
              </h3>
              <p className="font-body text-white/90 mb-6">
                When you join the CONNECT programme, we carefully match you with a mentor based on your goals, genre, and career stage. This isn&apos;t random — it&apos;s strategic.
              </p>
              <ul className="space-y-3">
                {[
                  "Complete your creative profile",
                  "Share your goals and aspirations",
                  "Get matched with the right mentor",
                  "Build a lasting professional relationship",
                ].map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
            Ready to Connect?
          </h2>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join the CONNECT programme and start building the relationships that will shape your creative career.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-accent font-bold uppercase">
              <Link href="/get-involved">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-accent font-bold uppercase"
            >
              <Link href="/programmes">
                View All Programmes <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
