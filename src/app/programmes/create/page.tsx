import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Music, Check, Clock, Calendar, Users, ArrowRight } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Create Programme | TMRW Creatives CIC",
  description: "Music creation and skills development programme. Hands-on sessions in songwriting, production, recording, and collaboration with industry professionals.",
}

const sessions = [
  {
    title: "Songwriting Fundamentals",
    description: "Learn the craft of songwriting from published writers. Structure, melody, lyrics, and hooks.",
    duration: "6 weeks",
  },
  {
    title: "Music Production 101",
    description: "Introduction to DAWs, arrangement, sound design, and mixing basics using Logic Pro and Ableton.",
    duration: "8 weeks",
  },
  {
    title: "Recording & Engineering",
    description: "Studio sessions covering microphone techniques, signal flow, and recording best practices.",
    duration: "4 weeks",
  },
  {
    title: "Collaboration Labs",
    description: "Work with other creatives on co-writes, productions, and creative projects.",
    duration: "Ongoing",
  },
]

const testimonials = [
  {
    quote: "The CREATE programme completely changed how I approach production. Learning from people who actually work in the industry made all the difference.",
    name: "Tyler, 19",
    role: "Producer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
  },
  {
    quote: "I came in knowing nothing about songwriting structure. Now I've co-written three songs that are being pitched to labels.",
    name: "Sophie, 23",
    role: "Songwriter",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
  },
]

export default function CreateProgrammePage() {
  return (
    <>
      <PageHero
        badge="CREATE PROGRAMME"
        title="Make Music."
        highlight="Make It Real."
        description="Hands-on sessions in songwriting, production, recording, and collaboration. Work with professional equipment and learn from active industry practitioners who are still making music today."
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-lg bg-tmrw-purple flex items-center justify-center mb-6">
                <Music className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-6">
                Skills That Matter
              </h2>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-6">
                The CREATE programme is where your creative journey begins. Whether you&apos;re picking up a microphone for the first time or looking to refine your production skills, we&apos;ll help you develop the technical abilities and creative confidence you need.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-8">
                All sessions are led by working professionals — songwriters with major placements, producers with chart credits, and engineers who work in London&apos;s top studios.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-tmrw-purple mx-auto mb-2" />
                  <p className="font-accent text-sm font-bold text-tmrw-black">Flexible</p>
                  <p className="font-body text-xs text-gray-500">Evening & Weekend</p>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-tmrw-purple mx-auto mb-2" />
                  <p className="font-accent text-sm font-bold text-tmrw-black">6-12 Weeks</p>
                  <p className="font-body text-xs text-gray-500">Per Module</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-tmrw-purple mx-auto mb-2" />
                  <p className="font-accent text-sm font-bold text-tmrw-black">Ages 12-30</p>
                  <p className="font-body text-xs text-gray-500">All Levels</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&q=80"
                  alt="Music production studio"
                  width={800}
                  height={600}
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-tmrw-purple rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Sessions Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              What You&apos;ll Learn
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sessions.map((session) => (
              <Card key={session.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading text-xl font-bold uppercase text-tmrw-black">
                      {session.title}
                    </h3>
                    <span className="font-accent text-sm text-tmrw-purple bg-tmrw-purple/10 px-3 py-1 rounded-full">
                      {session.duration}
                    </span>
                  </div>
                  <p className="font-body text-gray-600">
                    {session.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-8 text-center">
              What You&apos;ll Get
            </h2>

            <ul className="space-y-4">
              {[
                "Access to professional studio equipment and software",
                "Small group sessions with personalised feedback",
                "Portfolio of completed work to showcase",
                "Certificate of completion",
                "Priority access to CONNECT mentorship opportunities",
                "Invitation to industry showcase events",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-tmrw-gradient flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="font-body text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-4">
              From Our Creatives
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <p className="font-body text-gray-300 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-heading font-bold">{testimonial.name}</p>
                      <p className="font-accent text-sm text-tmrw-cyan">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-tmrw-purple text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
            Ready to Create?
          </h2>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Our next CREATE cohort starts soon. Apply now to secure your place and start your journey into music creation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-tmrw-purple hover:bg-white/90 font-accent font-bold uppercase"
            >
              <Link href="/get-involved">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-accent font-bold uppercase"
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
