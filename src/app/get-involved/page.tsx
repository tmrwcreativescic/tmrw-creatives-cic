import Link from "next/link"
import { Metadata } from "next"
import { Music, Briefcase, Building2, Heart, ArrowRight, Check } from "lucide-react"
import { PageHero } from "@/components/shared/PageHero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Get Involved | TMRW Creatives CIC",
  description: "Join TMRW Creatives as a young creative, mentor, partner, or supporter. Find out how you can be part of Medway's creative community.",
}

const pathways = [
  {
    id: "young-creative",
    icon: Music,
    title: "I'm a Young Creative",
    subtitle: "Ages 12-30",
    description: "Join one of our programmes to develop your skills, access industry, and connect with a community of like-minded creatives.",
    benefits: [
      "Free or low-cost programme access",
      "Professional skills development",
      "Industry mentorship opportunities",
      "Networking and collaboration",
      "Access to equipment and studios",
      "Pathway to paid opportunities",
    ],
    cta: "Apply to a Programme",
    href: "/programmes",
    color: "purple",
  },
  {
    id: "mentor",
    icon: Heart,
    title: "I'm an Industry Professional",
    subtitle: "Mentors & Facilitators",
    description: "Share your experience and help shape the next generation of creatives. We're looking for active professionals to mentor, teach, and inspire.",
    benefits: [
      "Give back to the industry",
      "Discover emerging talent",
      "Flexible time commitment",
      "Build your network",
      "Paid facilitation opportunities",
      "Shape the future of creativity",
    ],
    cta: "Become a Mentor",
    href: "/contact?type=mentor",
    color: "magenta",
  },
  {
    id: "partner",
    icon: Building2,
    title: "I'm a School or Youth Org",
    subtitle: "Partnerships & Outreach",
    description: "Partner with us to bring creative opportunities to your young people. We offer workshops, assemblies, and long-term partnership programmes.",
    benefits: [
      "Bespoke workshop delivery",
      "Curriculum-aligned content",
      "Pathway programmes for students",
      "Teacher CPD opportunities",
      "Industry speaker access",
      "Ongoing support and resources",
    ],
    cta: "Explore Partnerships",
    href: "/contact?type=partner",
    color: "cyan",
  },
  {
    id: "sponsor",
    icon: Briefcase,
    title: "I'm a Venue or Business",
    subtitle: "Sponsors & Supporters",
    description: "Support our mission through sponsorship, venue hosting, or in-kind contributions. Help us create more opportunities for young creatives.",
    benefits: [
      "Brand visibility and alignment",
      "Community engagement",
      "CSR and social impact",
      "Access to creative talent",
      "Event hosting opportunities",
      "Tailored partnership packages",
    ],
    cta: "Support TMRW",
    href: "/contact?type=sponsor",
    color: "dark",
  },
]

const faq = [
  {
    question: "Who can join TMRW programmes?",
    answer: "Our programmes are open to young people aged 12-30 based in or around Medway. Some programmes have specific age requirements, which are listed on the programme pages.",
  },
  {
    question: "How much do programmes cost?",
    answer: "Most of our programmes are free or heavily subsidised. Where there is a cost, bursaries are available for those who need financial support. We never want cost to be a barrier.",
  },
  {
    question: "Do I need experience to join?",
    answer: "No! Our programmes cater to all levels, from complete beginners to those looking to refine existing skills. We'll match you with the right programme for your level.",
  },
  {
    question: "How long are the programmes?",
    answer: "Programme length varies from 6-12 weeks depending on the programme. Sessions are typically held in evenings or weekends to accommodate school/work schedules.",
  },
  {
    question: "What if I'm not from Medway?",
    answer: "While we prioritise Medway-based creatives, we welcome applications from the wider Kent area. Some of our online sessions are open to participants from anywhere.",
  },
  {
    question: "How do I become a mentor?",
    answer: "We're always looking for industry professionals to join our mentor network. Fill out the mentor interest form and our team will be in touch to discuss opportunities.",
  },
]

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        badge="GET INVOLVED"
        title="Find Your Place"
        highlight="At TMRW."
        description="Whether you're a young creative looking to develop your skills, an industry professional wanting to give back, or an organisation seeking to partner, there's a role for you."
      />

      {/* Pathways Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {pathways.map((pathway) => (
              <Card
                key={pathway.id}
                className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <CardContent className="p-0">
                  <div
                    className={`p-6 ${
                      pathway.color === "purple"
                        ? "bg-tmrw-purple"
                        : pathway.color === "magenta"
                        ? "bg-tmrw-magenta"
                        : pathway.color === "cyan"
                        ? "bg-tmrw-cyan"
                        : "bg-tmrw-black"
                    } text-white`}
                  >
                    <pathway.icon className="w-10 h-10 mb-4" />
                    <h3 className="font-heading text-2xl font-bold uppercase">
                      {pathway.title}
                    </h3>
                    <p className="font-accent text-white/80">{pathway.subtitle}</p>
                  </div>

                  <div className="p-6">
                    <p className="font-body text-gray-600 mb-6">
                      {pathway.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {pathway.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <Check
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              pathway.color === "purple"
                                ? "text-tmrw-purple"
                                : pathway.color === "magenta"
                                ? "text-tmrw-magenta"
                                : pathway.color === "cyan"
                                ? "text-tmrw-cyan"
                                : "text-tmrw-black"
                            }`}
                          />
                          <span className="font-body text-sm text-gray-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="w-full font-accent font-bold">
                      <Link href={pathway.href}>
                        {pathway.cta} <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
              How to Apply
            </h2>
            <p className="font-body text-lg text-gray-600 max-w-2xl mx-auto">
              Joining TMRW is simple. Here&apos;s what to expect.
            </p>
            <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Fill out our online form with your details, interests, and goals.",
              },
              {
                step: "2",
                title: "Initial Chat",
                description: "We'll have a quick conversation to learn more about you.",
              },
              {
                step: "3",
                title: "Get Matched",
                description: "We'll match you with the programme that fits your needs.",
              },
              {
                step: "4",
                title: "Start Your Journey",
                description: "Join your cohort and begin developing your creative career.",
              },
            ].map((item, index) => (
              <div key={item.step} className="text-center relative">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-tmrw-gradient flex items-center justify-center">
                  <span className="font-heading text-xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold uppercase text-tmrw-black mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-gray-600 text-sm">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 right-0 translate-x-1/2 w-8">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-accent font-bold uppercase">
              <Link href="/programmes">View Programmes & Apply</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-tmrw-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-tmrw-black mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-24 h-1 bg-tmrw-gradient mx-auto rounded-full" />
            </div>

            <div className="space-y-6">
              {faq.map((item) => (
                <div
                  key={item.question}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="font-heading text-lg font-bold text-tmrw-black mb-2">
                    {item.question}
                  </h3>
                  <p className="font-body text-gray-600">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="font-body text-gray-600 mb-4">
                Still have questions?
              </p>
              <Button asChild variant="outline" className="font-accent font-bold">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-tmrw-gradient text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase mb-6">
            Ready to Start?
          </h2>
          <p className="font-body text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Whatever your role, there&apos;s a place for you at TMRW. Join our community and help us build the future of creativity in Medway.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-tmrw-purple hover:bg-white/90 font-accent font-bold uppercase"
            >
              <Link href="/programmes">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-accent font-bold uppercase"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
