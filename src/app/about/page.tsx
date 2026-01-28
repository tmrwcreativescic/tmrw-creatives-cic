import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import { Target, Eye, Heart, Lightbulb } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | TMRW Creatives CIC",
  description: "Learn about TMRW Creatives - Medway's community-led creative organisation connecting young people aged 12-30 with real industry access and pathways into music.",
}

const values = [
  {
    icon: Target,
    title: "Access Over Hype",
    description: "We prioritise genuine industry connections and practical opportunities over surface-level engagement.",
  },
  {
    icon: Eye,
    title: "Progression Over Attendance",
    description: "Our programmes are designed to move you forward, not just keep you busy. Every session builds towards your goals.",
  },
  {
    icon: Lightbulb,
    title: "Real-World Over Theory",
    description: "Learn from professionals who are actively working in the industry, not just teaching about it.",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in building each other up. Your success is our success, and we're here to support your journey.",
  },
]

const stats = [
  { number: "500+", label: "Young Creatives Supported" },
  { number: "50+", label: "Industry Mentors" },
  { number: "100+", label: "Workshops Delivered" },
  { number: "25+", label: "Industry Partners" },
]

const team = [
  {
    name: "Jordan Mitchell",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Former A&R at Sony Music with 10+ years in artist development.",
  },
  {
    name: "Patrick .A",
    role: "Founder & Marketing Director",
    image: "/images/patrick.jpeg",
    bio: "Marketing specialist committed to supporting emerging creatives and building sustainable pathways.",
  },
  {
    name: "Marcus Thompson",
    role: "Industry Partnerships Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Music industry veteran connecting talent with opportunity.",
  },
  {
    name: "Aisha Williams",
    role: "Community Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Medway local dedicated to amplifying creative voices.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="WHO WE ARE"
        title="Building What"
        highlight="Comes Next."
        description="TMRW Creatives is a community-led creative organisation based in Medway, Kent. We exist to connect young people aged 12-30 with the industry access, skills, and opportunities they need to build sustainable creative careers."
      />

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-6">
                Our Mission
              </h2>
              <p className="font-body text-lg text-gray-600 leading-relaxed mb-6">
                To democratise access to the music and creative industries by providing young people in Medway with the skills, connections, and opportunities typically reserved for those with existing networks or resources.
              </p>
              <p className="font-body text-lg text-gray-600 leading-relaxed">
                We believe that talent is everywhere, but opportunity is not. Our programmes bridge that gap, creating pathways where none existed before.
              </p>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80"
                  alt="Young creatives in a workshop"
                  width={800}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-tmrw-purple rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </p>
                <p className="font-accent text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              Our Values
            </h2>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-tmrw-gradient flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              Meet The Team
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Industry professionals and community leaders dedicated to supporting the next generation of creatives.
            </p>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tmrw-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black">
                  {member.name}
                </h3>
                <p className="font-accent text-sm text-tmrw-purple mb-2">
                  {member.role}
                </p>
                <p className="font-body text-sm text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-tmrw-black text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
            Ready to Join Us?
          </h2>
          <p className="font-body text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Whether you&apos;re a young creative looking to develop your skills, or an industry professional wanting to give back, there&apos;s a place for you at TMRW.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="font-accent font-bold uppercase">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-accent font-bold uppercase">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
